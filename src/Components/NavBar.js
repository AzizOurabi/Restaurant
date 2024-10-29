import React, { useState } from 'react';
import { Row, Container, Navbar, Nav, FormControl, Form } from 'react-bootstrap';

const NavBar = ({ filterbySearch, initialData = [] }) => {
    const [searchValue, setSearchValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(-1); // Index de sélection des suggestions

    const onSearch = (e) => {
        e.preventDefault();
        filterbySearch(searchValue);
        setSuggestions([]);
        setSelectedIndex(-1);
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchValue(value);
        setSelectedIndex(-1); // Réinitialiser l'index lors de la saisie

        if (value) {
            const filteredSuggestions = initialData
                .filter(item => item.title.toLowerCase().includes(value.toLowerCase()))
                .slice(0, 5);
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    };

    const handleSuggestionClick = (suggestion) => {
        setSearchValue(suggestion.title);
        filterbySearch(suggestion.title);
        setSuggestions([]);
        setSelectedIndex(-1);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowDown') {
            // Navigation vers le bas
            setSelectedIndex((prevIndex) => 
                (prevIndex < suggestions.length - 1) ? prevIndex + 1 : prevIndex
            );
        } else if (e.key === 'ArrowUp') {
            // Navigation vers le haut
            setSelectedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
        } else if (e.key === 'Enter') {
            // Sélectionner la suggestion si une suggestion est sélectionnée
            if (selectedIndex >= 0) {
                handleSuggestionClick(suggestions[selectedIndex]);
            } else {
                // Si aucune suggestion n'est sélectionnée, effectuer la recherche
                filterbySearch(searchValue);
            }
        }
    };

    return (
        <Row>
            <Navbar expand="lg" className="bg-dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#">
                        <div className="brand-color">New Restaurant</div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        </Nav>
                        <Form className="d-flex position-relative" onSubmit={onSearch}>
                            <FormControl
                                type="text"
                                placeholder="Search ..."
                                className="mx-2"
                                onChange={handleInputChange}
                                value={searchValue}
                                aria-label="Search"
                                onKeyDown={handleKeyDown} // Écoute des événements de touches
                            />
                            <button type="submit" className="btn-search">Search</button>
                            {/* Suggestions Box */}
                            {suggestions.length > 0 && (
                                <div className="suggestions" style={{ position: 'absolute', zIndex: 1000 }}>
                                    {suggestions.map((suggestion, index) => (
                                        <div
                                            key={suggestion.id}
                                            className={`suggestion-item ${selectedIndex === index ? 'active' : ''}`}
                                            onClick={() => handleSuggestionClick(suggestion)}
                                        >
                                            {suggestion.title}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Row>
    );
};

export default NavBar;