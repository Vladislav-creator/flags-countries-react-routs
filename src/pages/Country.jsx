import { Loader } from '../components/Loader/Loader';
import { CountryInfo } from '../components/CountryInfo/CountryInfo';
import { Section, Container, Backbutton, Left } from '../components/App/App.styled';
import { useFetchCountry } from 'hooks/useFetchCountry';
import { Navigate, useNavigate } from 'react-router-dom';
import { routes } from 'routes';

export const Country = () => {
 const navigate = useNavigate()
 const goBack = () => navigate(-1)
  
  const {loading, error, country} = useFetchCountry();
  return (
    <Section>
      <Container>
     <Backbutton onClick={goBack}><Left></Left> Go back</Backbutton>
       {loading&& <Loader/>}
       {error && <Navigate to = {routes.HOME}/>}
       {country && <CountryInfo
       country={country}/>}
      </Container>
    </Section>
  );
};