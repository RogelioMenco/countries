/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../redux/actions/countries';

// Define un hook personalizado llamado useFetchCountries que toma un argumento opcional llamado restart
//con un valor predeterminado de false.Este hook devolverá datos relacionados con los países.
export const useFetchCountries = (restart = false) => {
  const dispatch = useDispatch(); // Obtiene una referencia a la función dispatch de Redux utilizando useDispatch.
  // Esta referencia se utilizará para despachar la acción getCountries cuando sea necesario.

  const filteredCountries = useSelector(
    (state) => state.countries.filteredCountries,
  );
  const loaded = useSelector((state) => state.countries.loaded); // Utiliza useSelector para seleccionar la propiedad filteredCountries del estado de Redux almacenado en state.countries.
  // Esta propiedad probablemente contiene una lista de países filtrada de alguna manera.

  useEffect(() => {
    // Define un efecto secundario que se ejecutará cuando cambie la variable loaded o cuando restart sea true.
    if (!loaded || restart) dispatch(getCountries()); //solicita los paises
  }, [loaded]); // este array especifica que el efecto se ejecutará cuando cambie el valor de loaded.

  return { filteredCountries, loaded }; // devuelve
};

//  useFetchCountries se utiliza para manejar la obtención de datos de países desde Redux
