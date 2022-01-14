import React, { KeyboardEvent, useEffect, useState } from 'react'
import Logo from '../Logo'

import "./styles.css"

interface User {
  id: number,
  name: string
}

const AutoComplete: React.FC = () => {

  const [users, setUsers] = useState<User[]>([])
  const [suggestions, setSuggestions] = useState<User[]>([])
  const [name, setName] = useState<string>('')
  const [selected, setSelected] = useState<number>(0)

  useEffect(() => {
    const load = async () => {
      await fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))
    }
    load()
  }, [])

  useEffect(() => {
    if(name === '') {
      setSuggestions([]) 
      setSelected(0)
    }
  }, [name])

  const searchSuggestion = (name: string) => {
    const filteredData = users.filter((user: User) => {
      return Object.values(user.name)
        .join("")
        .toLowerCase()
        .includes(name.toLowerCase())
    })
    setName(name)
    setSuggestions(filteredData);
  }

  const handleSuggestion = (name: string, index: number) => {
    setName(name)
    setSuggestions([])
    setSelected(index)
  }

  const handleKey = (event: KeyboardEvent<HTMLInputElement>) => {
    
    if(event.key === 'ArrowDown') {
      selected <= suggestions.length -2 && setSelected(selected + 1)
    }

    if(event.key === 'ArrowUp') {
      selected !== 0 && setSelected(selected - 1)
    }

    if(event.key === 'Enter') {
      setName(suggestions[selected]?.name)
      setSuggestions([])
      setSelected(0)
    }
  }

  const highlight = (suggestionName: string) => {
    let regex = new RegExp(name, 'i');
    return suggestionName.replace(regex, '<span>'+ name +'</span>');
  }

  return (
    <div className='auto-complete'>
      <Logo />
      <input 
        type='text' 
        value={name} 
        placeholder='Start typing...' 
        onChange={(event) => searchSuggestion(event.target.value)} 
        onKeyDown={(event) => handleKey(event)}
      />

      <div className='suggestions-list'>
        {suggestions && suggestions.map( (suggestion, index: number) => (
          <li 
            key={suggestion.id}
            onClick={() => handleSuggestion(suggestion.name, index)}
            className={index === selected ? 'active' : ''}
            dangerouslySetInnerHTML={{__html: highlight(suggestion.name)}}
          />
        ))}
      </div>
    </div>
  );
}

export default AutoComplete;