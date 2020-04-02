import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Container,
    Row,
    Col
  } from 'reactstrap';
  import './App.css'
const lang = 'en'

  export default function Infopage(selectlang='np') {
    return (<div className="context">
        <ul><h3>For informational purposes only. Consult your local medical authority for advice.</h3></ul>

        <ul>
            <h2><u>Coronavirus Disease [COVID-19]</u></h2>
            <h3><u>OVERVIEW:</u></h3>    
            {/* <h4><u>बारेमा</u></h4> */}
            <hr/>
            <ul><u>Coronavirus disease (COVID-19) is an infectious disease caused by a new virus.</u></ul>
            <ul>The disease causes respiratory illness (like the flu) with symptoms such as a cough, fever, and in more severe cases, difficulty breathing. You can protect yourself by washing your hands frequently, avoiding touching your face, and avoiding close contact (1 meter or 3 feet) with people who are unwell.</ul>
            <hr/>
            <ul><u>HOW IT SPREADS:</u></ul>
            <ul>Coronavirus disease spreads primarily through contact with an infected person when they cough or sneeze. It also spreads when a person touches a surface or object that has the virus on it, then touches their eyes, nose, or mouth.</ul>
            <hr/>
            <ul><u>SYMPTOMS:</u></ul>
            <ul>
                <p>People may be sick with the virus for 1 to 14 days before developing symptoms. The most common symptoms of Coronavirus disease (COVID-19) are fever, tiredness, and dry cough. Most people (about 80%) recover from the disease without needing special treatment.</p>
                <p>More rarely, the disease can be serious and even fatal. Older people, and people with other medical conditions (such as asthma, diabetes, or heart disease), may be more vulnerable to becoming severely ill.</p>
                <ul>People may experience:
                    <li>Cough</li>
                    <li>Fever</li>
                    <li>Tiredness</li>
                    <li>Difficulty breathing (severe cases)</li>
                </ul>
            </ul>
            <hr/>
            <ul><u>PREVENTION :</u></ul>
            <ul>
                <p>There’s currently no vaccine to prevent coronavirus disease (COVID-19).</p>
                <p>You can protect yourself and help prevent spreading the virus to others if you:</p>
                <p>Do:</p>
                <ul>
                    <li>Wash your hands regularly for 20 seconds, with soap and water or alcohol-based hand rub</li>
                    <li>Cover your nose and mouth with a disposable tissue or flexed elbow when you cough or sneeze</li>
                    <li>Avoid close contact (1 meter or 3 feet) with people who are unwell</li>
                    <li>Stay home and self-isolate from others in the household if you feel unwell</li>
                </ul>
                <hr/>
                <p>Don't:</p>
                <ul>
                    <li>Touch your eyes, nose, or mouth if your hands are not clean.</li>
                    
                </ul>

            </ul>
            <hr/>
            <ul><u>TREATMENTS:</u></ul>
            <ul>
                <p>There is no specific medicine to prevent or treat coronavirus disease (COVID-19). People may need supportive care to help them breathe.</p>
                <p>Self care:</p>
                <p>If you have mild symptoms, stay at home until you’ve recovered. You can relieve your symptoms if you:</p>
                <ul>
                    <li>Rest and sleep</li>
                    <li>Keep warm</li>
                    <li>Drink plenty of liquids</li>
                    <li>कोठामा  ह्युमिडिफायर प्रयोग गरेमा</li>
                    <li>Use a room humidifier or take a hot shower to help ease a sore throat and cough</li>
                </ul>
            </ul>
            <hr/>
            <ul><u>Medical treatments:</u></ul>
            <ul>If you develop a fever, cough, and have difficulty breathing, promptly seek medical care. Call in advance and tell your health provider of any recent travel or recent contact with travelers.</ul>
        </ul>
      </div>
    );
  }