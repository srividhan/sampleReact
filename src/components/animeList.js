import React from "react";
import "./animeList.css";
export default function AnimeList(){
    return(
        <div>
            <h3>Some Characters Name:</h3>
            <ul type="square">
                <li>Men</li>
                <ul>
                    <li>Naruto</li>
                    <li>Jiraiya</li>
                    <li>Kakashi</li>
                    <li>Itachi</li>
                    <li>Sasuke</li>
                </ul>
                <li>Women</li>
                <ul>
                    <li>Hinata</li>
                    <li>Tsunade</li>
                    <li>Sakura</li>
                </ul>
            </ul>
        </div>
    )
}