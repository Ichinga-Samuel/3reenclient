// import { ItemStyled } from '../BestSellerItems/BestSeller.styled';
import CardLayout from './CardsLayout';

function SearchList({ filteredPersons }) {
    //const filtered = filteredPersons.map((items) => <CardLayout key={items.id} items={items} />);
    const filtered = <CardLayout data={filteredPersons} />;
    return <div>{filtered}</div>;
}

export default SearchList;
