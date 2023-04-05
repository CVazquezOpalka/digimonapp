import { useState, useEffect } from "react";
import { DigimonContext } from "./DigimonContext";
import axios from "axios";

export const DigimonProvider = ({ children }) => {
  const [allDigimon, setAllDigimon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(false);
  const [checkbox, setCheckbox] = useState({
    Rookie: false,
    Champion: false,
    Mega: false,
  });
  const [filter, setFilter] = useState([])

  const getDigimonByLevel = async () => {
    const rookie = `https://digimon-api.vercel.app/api/digimon/level/rookie`;
    const champion = `https://digimon-api.vercel.app/api/digimon/level/champion`;
    const mega = `https://digimon-api.vercel.app/api/digimon/level/mega`;
    const resRookie = await axios.get(rookie);
    const resChampion = await axios.get(champion);
    const resMega = await axios.get(mega);
    setAllDigimon([...resRookie.data, ...resChampion.data, ...resMega.data]);
    setLoading(false);
  };


  useEffect(() => {
    getDigimonByLevel();
  }, []);

  return (
    <DigimonContext.Provider
      value={{
        allDigimon,
        loading,
        checkbox,
        setCheckbox,
        setFilter,
        filter
      }}
    >
      {children}
    </DigimonContext.Provider>
  );
};
