import { ItemStyled } from '../BestSellerItems/BestSeller.styled';
import CardLayout from './CardsLayout';

function SearchList({ filteredPersons }) {
    const filtered = filteredPersons.map((items) => <CardLayout key={items.id} items={items} />);
    return <div>{filtered}</div>;
}

export default SearchList;
