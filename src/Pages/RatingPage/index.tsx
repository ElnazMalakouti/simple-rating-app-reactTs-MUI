import Button from "../../Components/Button";
import RatingStars from "../../Components/Rating";
import { useState } from 'react';
import { positivePoints, negativePoints } from "../../staticData/props";

const RatingPage = () => {

    const [rating, setRating] = useState<number>(0);

    const [selectedProps, setSelectedProps] = useState<string[]>([])

    const [props, setProps] = useState<string[]>(positivePoints)


    return (
        <>
            <div className="w-full h-full flex flex-col justify-between items-center gap-[16px] p-[8px] overflow-auto font-[vazir]">

                <p className="font-[vazir-bold]">ثبت بازخورد</p>

                <div className="flex flex-col justify-center items-center gap-[8px] font-[vazir-bold] text-[14px]">
                    <p>محمد مهدی مرندی تهرانی</p>

                    <RatingStars
                        value={rating}
                        onChange={setRating}
                    />

                    <p>متوسط</p>
                </div>

                <textarea
                    placeholder="نظر خود را در مورد خدمت دریافتی بنویسید."
                    rows={2}
                    className="resize-none w-full rounded-[4px] border-[1px] border-[#00919F] text-[#00919F] placeholder-[#00919F] text-[12px] p-[8px] font-[vazir]"
                />

                <div className="w-full flex flex-col justify-center items-center gap-[8px]">
                    <div className="w-full flex justify-between items-center px-[15%]">
                        <p
                            className={`
                            ${props === positivePoints ? 'text-[#1F9291] underline underline-offset-8 decoration-2' : 'text-[#000000] decoration-none'} 
                            font-bold font-[vazir-bold]`}
                            onClick={() => setProps(positivePoints)}
                        >
                            نقاط مثبت
                        </p>
                        <p
                            className={`
                            ${props === negativePoints ? 'text-[#1F9291] underline underline-offset-8 decoration-2' : 'text-[#000000] decoration-none'} 
                            font-bold font-[vazir-bold]`}
                            onClick={() => setProps(negativePoints)}
                        >
                            نقاط منفی
                        </p>
                    </div>

                    <p className="text-[14px] font-[vazir]">
                        نقاط
                        {props === positivePoints ? ' مثبت ' : ' منفی '}
                        متخصص را انتخاب کنید
                    </p>

                    <div className="w-full grid grid-cols-2 justify-between items-center gap-x-[12px] gap-y-[4px]">
                        {
                            props.map(item => {
                                return <button
                                    className="rounded-[20px] py-[4px] border-[1px] border-[#1F9291] text-[#1F9291] text-[14px]"
                                >
                                    {item}
                                </button>
                            })
                        }
                    </div>
                </div>

                <Button
                    color="greenBlue"
                    variant="primary"
                    className="w-full"
                >ثبت بازخورد</Button>

            </div>
        </>
    )
}

export default RatingPage