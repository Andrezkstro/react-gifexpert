import PropTypes from 'prop-types';

export const GifItem = ({titulo, url, id}) => {
    return (
        <div className="card">
            <img src={ url } alt={ titulo } />
            <p> { titulo } </p>
        </div>
    )
}


GifItem.propTypes = {
    titulo: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}