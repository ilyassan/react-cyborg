import './SectionHeader.css';

const SectionHeader = (props) => {

  const words = props.children.split(' ');
  const lastWord = words[words.length - 1];
  words.pop(-1)

  return (
    <div className='section-header'>
      <h4 className={props.center?"text-center":""} ><span className='text-decoration-underline'>{words.join(' ')}</span> <span className='active'>{lastWord}</span></h4>
    </div>
  );
};

export default SectionHeader;
