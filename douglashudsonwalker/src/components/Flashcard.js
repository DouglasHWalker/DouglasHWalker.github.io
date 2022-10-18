import React from "react";
import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import "./Flashcard_Style.css";

const Flashcard = ({ flashcards }) => {
    useEffect(() => {
        document.getElementById("ddl_certificate").value = "All";
        Lock_CardInfoDropdown(document.getElementById("ddl_certificate"));
        document.getElementById("cardset_total").innerHTML = current_cardset.length;

     }, []);

    let cards = shuffleArray(flashcards);
    let current_cardset = cards;
    let current_card = cards[0];
    let completedCount = 0;

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function remindCard() {
        addCard(current_card);
        nextCard();
    }

    function nextCard() {
        // check if done
        if (current_cardset.length == 0) {
            alert("congratulations");
            return;
        }
        // TODO: #46 Change card traversal so that cards are kept in memory
        completedCount++;
        current_card = current_cardset.shift();
        Update_CardInfoDropdown_IfNotLocked(current_card.certificate, "ddl_certificate");
        Update_CardInfoDropdown_IfNotLocked(current_card.section, "ddl_section");
        Update_CardInfoDropdown_IfNotLocked(current_card.module, "ddl_module");
        document.getElementsByClassName("card-title")[0].innerHTML = current_card.topic;
        document.getElementById("prompt").innerHTML = "<span>" + current_card.prompt + "</span>";
        document.getElementById("answer").innerHTML = "<span>" + current_card.answer + "</span>";
        // cards completed
        document.getElementById("cards_completed_count").innerHTML = completedCount;
        // reset card face
        let prompt = document.getElementById("prompt");
        if (!prompt.classList.contains("d_none")) {
            toggleFace();
        }
    }
    function Filter_CurrentCardSet(property, value) {
        // doubl check with the user that this is what they wnat
        if (value == "All") {
            property = "All";
            current_cardset = cards;
        } else {
            current_cardset = cards.filter((card) => card[property.toLowerCase()] == value);
        }
        // reset count, update the number of cards
        document.getElementById("cardset_total").innerHTML = current_cardset.length;
        completedCount = 0;
        nextCard();
        // filter filters
        let filt_cert = new Set(current_cardset.map(fc => fc.certificate));
        let filt_section = new Set(current_cardset.map(fc => fc.section));
        let filt_module = new Set(current_cardset.map(fc => fc.module));

        Set_DropdownOptions("ddl_certificate", filt_cert, property);
        Set_DropdownOptions("ddl_section", filt_section, property);
        Set_DropdownOptions("ddl_module", filt_module, property);

        // unlock relevant dropdowns depending on category
        UpdateDOM_CardInfoDropdown(property);
    }
    function Set_DropdownOptions(id, values, property) {
        let newOptions = "";
        let ddl = document.getElementById(id);

        let allSelected = (property == "All");

        if (id == "ddl_certificate") {
            if (allSelected) {
                newOptions += "<option selected value='All'>All Certifications/Subjects</option>";
            } else {
                newOptions += "<option value='All'>All Certifications/Subjects</option>";
            }
        }

        for (let value of values) {
            if (!allSelected) {
                newOptions += "<option selected value='" + value + "'>" + value + "</option>";
            } else {
                newOptions += "<option value='" + value + "'>" + value + "</option>";
            }
        }
        ddl.innerHTML = newOptions;
    }
    //Card dropdowns
    function UpdateDOM_CardInfoDropdown(property) {
        switch (property.toLowerCase()) {
            case "certificate":
                Unlock_CardInfoDropdown(document.getElementById("ddl_section"));
                Unlock_CardInfoDropdown(document.getElementById("ddl_module"));
                Update_CardInfoDropdown_IfNotLocked(current_card.section, "ddl_section");
                Update_CardInfoDropdown_IfNotLocked(current_card.module, "ddl_module");
                break;
            case "section":
                Unlock_CardInfoDropdown(document.getElementById("ddl_certificate"));
                Update_CardInfoDropdown_IfNotLocked(current_card.certificate, "ddl_certificate");
                Lock_CardInfoDropdown(document.getElementById("ddl_certificate"));
                Unlock_CardInfoDropdown(document.getElementById("ddl_module"));
                Update_CardInfoDropdown_IfNotLocked(current_card.module, "ddl_module");
                break;
            case "module":
                Unlock_CardInfoDropdown(document.getElementById("ddl_certificate"));
                Unlock_CardInfoDropdown(document.getElementById("ddl_section"));
                Update_CardInfoDropdown_IfNotLocked(current_card.certificate, "ddl_certificate");
                Update_CardInfoDropdown_IfNotLocked(current_card.section, "ddl_section");
                Lock_CardInfoDropdown(document.getElementById("ddl_certificate"));
                Lock_CardInfoDropdown(document.getElementById("ddl_section"));
                break;
            default:
                Update_CardInfoDropdown_IfNotLocked("All", "ddl_certificate");
                Update_CardInfoDropdown_IfNotLocked(current_card.section, "ddl_section");
                Update_CardInfoDropdown_IfNotLocked(current_card.module, "ddl_module");
                Unlock_CardInfoDropdown(document.getElementById("ddl_certificate"));
                Unlock_CardInfoDropdown(document.getElementById("ddl_section"));
                Unlock_CardInfoDropdown(document.getElementById("ddl_module"));
                break;
        }
    }
    function Set_CardInfoDropdown(values, id) {
        let dropdown = document.getElementById(id);
        dropdown.empty();
        dropdown.append('<option value=')
    }
    function Update_CardInfoDropdown_IfNotLocked(value, id) {
        let dropdown = document.getElementById(id);
        if (!isLocked(dropdown)) dropdown.value = value;
        function isLocked(ddl) {
            return ddl.dataset.locked == "true";
        }
    }
    function Lock_CardInfoDropdown(ddl) {
        ddl.dataset.locked = true;
        ddl.classList.add("locked");
    }
    function Unlock_CardInfoDropdown(ddl) {
        ddl.dataset.locked = false;
        ddl.classList.remove("locked");
    }
    function OnChange_CardInfoDropdown(ddl_id, property) {
        let ddl = document.getElementById(ddl_id);
        Filter_CurrentCardSet(property, ddl.value);
        Lock_CardInfoDropdown(ddl);
    }
    function addCard(card) {
        current_cardset.push(card);
        completedCount--;
    }
    function toggleFace() {
        let prompt = document.getElementById("prompt");
        let answer = document.getElementById("answer");
        prompt.classList.toggle("d_none");
        answer.classList.toggle("d_none");
    }
    return (
        <>
            <div className="flashcard-page-container">
                <div className="flashcard-container">
                    <h2 className='highlight accent-foreground' style={{ width: "100%" }}>Flashcards</h2>
                    <div className="card-info">
                        <span className="card-info-title">
                            <select id="ddl_certificate" className="card-info-dropdown" onChange={() => OnChange_CardInfoDropdown('ddl_certificate', 'Certificate')}>
                                <option value="All">All Certifications/Subjects</option>
                                {[...new Set(flashcards.map(item => item.certificate))].map((value, key) => (
                                    <option key={key} value={value}>{value} ({flashcards.filter(c => c.certificate === value).length})</option>
                                ))}
                            </select>
                        </span>
                        <span className="card-info-subtitle">
                            <select id="ddl_section" className="card-info-dropdown" onChange={() => OnChange_CardInfoDropdown('ddl_section', 'Section')}>
                                {[...new Set(flashcards.map(item => item.section))].map((value, key) => (
                                    <option key={key} value={value}>{value} ({flashcards.filter(c => c.section === value).length})</option>
                                ))}
                            </select>
                        </span>
                        <span className="card-info-subtitle">
                            <select id="ddl_module" className="card-info-dropdown" onChange={() => OnChange_CardInfoDropdown('ddl_module', 'Module')}>
                                {[...new Set(flashcards.map(item => item.module))].map((value, key) => (
                                    <option key={key} value={value}>{value} ({flashcards.filter(c => c.module === value).length})</option>
                                ))}
                            </select>
                        </span>
                    </div>
                    {/* cards */}
                    <div className="card-frame">
                        {/* card header */}
                        <div className="Card-Header">
                            <span className="card-title">{flashcards[0].topic}</span>
                            <div className="card-count">
                                <span id="cards_completed_count">0</span> / <span id="cardset_total">{flashcards.map(el => el).legnth}</span>
                            </div>
                        </div>
                        {/* card content */}
                        <div className="Card-Content" onClick={() => toggleFace()}>
                            <div id="prompt" className="d_none" style={{display: "none"}}>
                                <span dangerouslySetInnerHTML={{ __html: flashcards[0].prompt }}></span>
                            </div>

                            <div id="answer" style={{display: "none"}}>
                                <span dangerouslySetInnerHTML={{ __html: flashcards[0].answer }}></span>
                            </div>
                        </div>
                        {/* submit buttons */}
                        <div className="Submit-Buttons">
                            <div className="submit-btn negative" onClick={() => remindCard()}>
                                <span className="submit-btn-content">Remind me</span>
                            </div>
                            <div className="submit-btn positive" onClick={() => nextCard()}>
                                <span className="submit-btn-content">I know this!!</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Flashcard;