import RenderDropdownItem from './RenderDropdownItem';

export default function SideDropdown(props){ 
  return <>
        select a side:
    <select onChange={(e) => {props.setSideId(e.target.value); }}>
      {
        props.sideArr.map((item, i) => <RenderDropdownItem key={`${item}${i}`} item={item} i={i} />)

      }
    </select>
  </>;
}