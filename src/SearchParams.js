import React, { useState, useEffect } from 'react'
import pet, { ANIMALS } from '@frontendmasters/pet'
import useDropdown from './UseDropdown'




const SearchParams = () => {
    const [location, setLocation] = useState("Seatle WA")
    // const [animal, setAnimal] = useState("");
    // const [breed, setBreed] = useState("");
    const [animal, AnimalDropdown] = useDropdown("Animal", "Dog", ANIMALS);
    const [breed, BreedDropdown] = useDropdown("Breed", "", breeds);
    const [breeds, setBreeds] = useState([]);

    useEffect(() => {
        setBreeds([])
        setBreeds("")
        pet.breeds(animal).then(({ breeds }) => {
            const breedStrings = breeds.map(({ name }) => name)
            setBreeds(breedStrings)
        }, console.error)
    }, [animal])


    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    Location
                    <input
                        id="location"
                        value={location}
                        placeholder="Location"
                        onChange={e => setLocation(e.target.value)} />
                </label>
                <AnimalDropdown />
                <BreedDropdown />

                <button>Submit</button>
            </form>
        </div>
    )
}

export default SearchParams;