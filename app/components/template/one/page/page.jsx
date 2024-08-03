import React from 'react';
import Image from "./image/abit.jpg"; // Replace with your actual image import


const Pdf = () => (
    <div className="p-4 font-sans">
        {/* Header Section */}
        <div className="flex justify-between">
            <div className="w-1/2">
                <div className="flex flex-row">
                    <div className="flex justify-between items-center">
                        {/* Left Column (Name and Image) */}
                        <div className=" flex flex-col">
                            <img src={Image} alt="User Image" className="h-24 w-auto" />
                            <div className="pt-4">
                                <h1 className="text-4xl font-bold text-blue-500">GILBERT PHILIPPE</h1>
                                <p className="text-blue-500">Directeur comptable</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column (Contact Information) */}
                    <div className=" flex-col">
                        <div className="flex">
                            <div className="ml-8"> {/* Adjust margin-left for spacing */}
                                <div className="mt-4 ">
                                    <p className="text-sm font-thin">email</p>
                                    <p className="text-sm font-thin">adress</p>
                                    <p className="text-sm font-thin">telephone</p>
                                    <p className="text-sm font-thin">date de naissance</p>
                                    <p className="text-sm font-thin">nationalite</p>
                                    <p className="text-sm font-thin">lien</p>
                                </div>
                            </div>
                            <div className="mt-4 ml-8"> {/* Adjust margin-left and margin-top for spacing */}
                                <p className="text-sm">elieboulingui2@gmail.com</p>
                                <p className="text-sm">montalier</p>
                                <p className="text-sm">0746997914</p>
                                <p className="text-sm">03032000</p>
                                <p className="text-sm">gabonaise</p>
                                <p className="text-sm">google</p>
                            </div>
                        </div>
                        {/* Objectif Section */}
                        <div className="mt-2 pl-4"> {/* Adjust margin-top for spacing */}
                            <h2 className="text-lg font-bold text-blue-500 uppercase">Objectif</h2>
                            <hr className="border-blue-500 border-1 my-2" /> {/* Add margin-y for spacing */}
                            <p className="text-sm">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            </p>
                        </div>
                    </div>
                </div>




                {/* Experience Section */}
                <div className="mb-4">
                    <h2 className="text-lg font-bold text-blue-500 uppercase">Expériences</h2>
                    <hr className="border-blue-500 border-1" />
                    {/* Individual experience items */}
                    <div className="flex flex-wrap mb-4">
                        <div className="w-1/2 pr-8 pt-4">
                            <p className="text-sm font-bold">PARIS</p>
                            <p className="text-sm">juil 2009 - déc 2009</p>
                            <p className="text-sm">comptabilité financière avancée</p>
                            <p className="text-sm">université</p>
                            <p className="text-sm">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                        <div className="w-1/2 pr-8 pt-4">
                            <p className="text-sm font-bold">PARIS</p>
                            <p className="text-sm">juil 2009 - déc 2009</p>
                            <p className="text-sm">comptabilité financière avancée</p>
                            <p className="text-sm">université</p>
                            <p className="text-sm">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                        <div className="w-1/2 pr-8 pt-4">
                            <p className="text-sm font-bold">PARIS</p>
                            <p className="text-sm">juil 2009 - déc 2009</p>
                            <p className="text-sm">comptabilité financière avancée</p>
                            <p className="text-sm">université</p>
                            <p className="text-sm">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Experience Section */}
                <div className="mb-4">
                    <h2 className="text-lg font-bold text-blue-500 uppercase">education</h2>
                    <hr className="border-blue-500 border-1" />
                    {/* Individual experience items */}
                    <div className="flex flex-wrap mb-4">
                        <div className="w-1/2 pr-8 pt-4">
                            <p className="text-sm font-bold">PARIS</p>
                            <p className="text-sm">juil 2009 - déc 2009</p>
                            <p className="text-sm">comptabilité financière avancée</p>
                            <p className="text-sm">université</p>
                            <p className="text-sm">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                        <div className="w-1/2 pr-8 pt-4">
                            <p className="text-sm font-bold">PARIS</p>
                            <p className="text-sm">juil 2009 - déc 2009</p>
                            <p className="text-sm">comptabilité financière avancée</p>
                            <p className="text-sm">université</p>
                            <p className="text-sm">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                        <div className="w-1/2 pr-8 pt-4">
                            <p className="text-sm font-bold">PARIS</p>
                            <p className="text-sm">juil 2009 - déc 2009</p>
                            <p className="text-sm">comptabilité financière avancée</p>
                            <p className="text-sm">université</p>
                            <p className="text-sm">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Competences and Langues Section */}
                <div className="flex justify-between">
                    <div className="w-1/2 pr-4">
                        <h2 className="text-lg font-bold text-blue-500">Compétences</h2>
                        <hr className="border-blue-500 border-1" />
                        <ul className="list-disc ml-4">
                            <li className="text-sm">Compétences en organisation</li>
                            <li className="text-sm">Gestion du groupe</li>
                            <li className="text-sm">Adaptabilité</li>
                            <li className="text-sm">Leadership</li>
                            <li className="text-sm">Souci du détail</li>
                        </ul>
                    </div>
                    <div className="w-1/2 pl-4">
                        <h2 className="text-lg font-bold text-blue-500">Langues</h2>
                        <hr className="border-blue-500 border-1" />
                        <div className="flex">
                            <div className="w-1/2">
                                <p className="text-sm">français</p>
                                <p className="text-sm">native</p>
                            </div>
                            <div className="w-1/2">
                                <p className="text-sm">espagnol</p>
                                <p className="text-sm">élémentaire</p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <p className="text-lg font-bold text-blue-500">Anglais</p>
                            <p className="text-sm">Compétence professionnelle complète</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Pdf;
