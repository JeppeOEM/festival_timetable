import index from "../../styles/components/line-up/index.module.sass";

function DaySelector() {
  return (
    <div className={index.select}>
      <a href='#Monday'>
        <span>Monday</span>
      </a>
      <a href='#Tuesday'>
        <span>Tuesday</span>
      </a>
      <a href='#Wednesday'>
        <span>Wednesday</span>
      </a>
      <a href='#Thursday'>
        <span>Thursday</span>
      </a>
      <a href='#Friday'>
        <span>Friday</span>
      </a>
      <a href='#Saturday'>
        <span>Saturday</span>
      </a>
      <a href='#Sunday'>
        <span>Sunday</span>
      </a>
    </div>
  );
}

export default DaySelector;
