import Card from "../Card"

export default function Portfolio(){
    return ( 
        <div className="">
            <div className="relative overflow-auto grid grid-cols-2 gap-5 items-center w-full">
                <Card title="Hello" numbers={"4548"} percentage={"66"} svg='customer' />
                <Card title="Hello" numbers={"4548"} percentage={"66"} svg='customer' />
                <Card title="Hello" numbers={"4548"} percentage={"66"} svg='customer' />
                <Card title="Hello" numbers={"4548"} percentage={"66"} svg='customer' />
            </div>
        </div>
    );
}
