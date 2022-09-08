import {useRouter} from 'next/router'
import React, {createContext, useContext, useEffect, useState} from 'react'

const HistoryContext = createContext(null);
export const HistoryProvider = ({children}) => {
  const {asPath} = useRouter();
  const [previous, setPrevious] = useState('')
  const [history, setHistory] = useState([])
  useEffect(() => {

    // Save the user's history and store in sessionStorage
    function updateHistory(history) {
      history = sessionStorage.getItem('history') ? JSON.parse(sessionStorage.getItem('history')) : [];
      let previous = history[history.length - 1];
      setHistory(history)
      // Get the correct previous URL if the page has been refreshed rather than navigated away from
      if (asPath === previous) {
        previous = history[history.length - 2];
        setPrevious(previous);
      } else {
        setPrevious(previous)
        history.push(asPath);
        // Keep last 10 items in history
        history.splice(0, history.length - 10)
      }
      sessionStorage.setItem('history', JSON.stringify(history));
    }

    updateHistory(history);
  }, [asPath])

  return (
    <HistoryContext.Provider
      value={{
        previous,
        history,
      }}
    >
      {children}
    </HistoryContext.Provider>
  )
}

export function useHistory() {
  return useContext(HistoryContext)
}