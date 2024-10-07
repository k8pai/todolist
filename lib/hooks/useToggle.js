import { useState, useCallback } from 'react';

/**
 * Custom hook to manage boolean toggle state.
 *
 * @param {boolean} [initialValue=false] - The initial state value.
 * @returns {Object}
 * @returns {boolean} value - The current boolean state value.
 * @returns {function} toggle - Function to toggle the boolean value. Optionally accepts a callback that is called with the new value.
 * @returns {function} setTrue - Function to explicitly set the state to true. Optionally accepts a callback that is called with the new value.
 * @returns {function} setFalse - Function to explicitly set the state to false. Optionally accepts a callback that is called with the new value.
 *
 * @example
 * const { value, toggle, setTrue, setFalse } = useToggle(false);
 *
 * // Toggle value
 * toggle();
 *
 * // Set value to true
 * setTrue();
 *
 * // Set value to false with a callback
 * setFalse((newValue) => console.log('New Value:', newValue));
 */

export const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback((cb) => {
    setValue((prevValue) => {
      const newValue = !prevValue;
      if (cb) cb(newValue); // Call the callback with the new value if provided
      return newValue;
    });
  }, []);

  const setTrue = useCallback((cb) => {
    setValue(true);
    if (cb) cb(true); // Call the callback if provided
  }, []);

  const setFalse = useCallback((cb) => {
    setValue(false);
    if (cb) cb(false); // Call the callback if provided
  }, []);

  return { value, toggle, setTrue, setFalse };
};

export default useToggle;