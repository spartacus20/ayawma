import React from 'react'
import Camara from "../../Assets/Group.js";
import GameIcon from "../../Assets/GameIcon.js";
import Components from "../../Assets/Components";
import Smartphones from "../../Assets/Smartphones.js";
import Gadgets from "../../Assets/Gadgets";
import Cables from "../../Assets/Cables";
import Computers from "../../Assets/Computers";
import Acessories from "../../Assets/Acessories";
import TV from "../../Assets/TV";
import Router from "../../Assets/Router";

function CategorieList() {
    return (
        <ul className="text-white">
            <li className="mb-[10px] flex justify-center items-center">
                <Camara />
                <a href="" className="ml-[5px]">
                    Foto & Video{" "}
                </a>
            </li>
            <li className="mb-[10px] flex justify-center items-center">
                <GameIcon />
                <a href="" className="ml-[5px]">
                    Gaming{" "}
                </a>
            </li>
            <li className="mb-[10px] flex justify-center items-center">
                <Components />
                <a href="" className="ml-[5px]">
                    Components{" "}
                </a>
            </li>
            <li className="mb-[10px] flex justify-center items-center">
                <Smartphones />
                <a href="" className="ml-[5px]">
                    Smartphones{" "}
                </a>
            </li>
            <li className="mb-[10px] flex justify-center items-center">
                <Gadgets />
                <a href="" className="ml-[5px]">
                    Gadgets{" "}
                </a>
            </li>
            <li className="mb-[10px] flex justify-center items-center">
                <Cables />
                <a href="" className="ml-[5px]">
                    Cables & Adapters{" "}
                </a>
            </li>
            <li className="mb-[10px] flex justify-center items-center">
                <Computers />
                <a href="" className="ml-[5px]">
                    Computers{" "}
                </a>
            </li>
            <li className="mb-[10px] flex justify-center items-center">
                <Acessories />
                <a href="" className="ml-[5px]">
                    Acessories{" "}
                </a>
            </li>
            <li className="mb-[10px] flex justify-center items-center">
                <TV />
                <a href="" className="ml-[5px]">
                    TV{" "}
                </a>
            </li>
            <li className="mb-[10px] flex justify-center items-center">
                <Router />
                <a href="" className="ml-[5px]">
                    Router{" "}
                </a>
            </li>
        </ul>
    )
}

export default CategorieList