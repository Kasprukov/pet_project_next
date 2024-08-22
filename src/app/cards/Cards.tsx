import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import Image from "next/image";

export default function Cards() {
    const { characters } = useSelector((state: RootState) => state.characters);
    
    return (
        characters.map((character) => (
            <div key={character.id} className="flex flex-col w-80 h-auto bg-gray-950 m-5 p-4 rounded-lg shadow-lg">
              <Image 
                src={character.image} 
                alt={character.name} 
                width={200} 
                height={200} 
                className="w-full h-72 object-cover rounded-lg mb-3 transition-transform duration-300 transform hover:scale-105" 
              />
              <div className=" bg-gray-800 rounded-lg p-2">
                <h2 className="text-lg font-semibold text-green-300 text-center pb-2 hover:text-green-500 duration-200">{character.name}</h2>
                <p className="text-base text-white">{character.species} - {character.status}</p>
                <p className="text-base text-white">Type: {character.type ? character.type : "None"}</p>
                <p className="text-base text-white">Gender: {character.gender}</p>
              </div>
            </div>
        ))
    )
  }