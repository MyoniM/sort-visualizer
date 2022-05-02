export interface IProp {
  array: number[];
}
export default function Home(prop: IProp) {
  console.log(prop.array);

  return <div>Index</div>;
}
