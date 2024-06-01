import './InlineIconText.scss';

function InlineIconText(prop){
    return(
        <div className='inline-icon-text'>
            <img src={prop.icon} alt={prop.altText} className='inline-icon-text__icon' />
            <p className='inline-icon-text__text'>{prop.text}</p>
        </div>
    );
}

export default InlineIconText;