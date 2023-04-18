import Button from "../../Components/Button";
import RatingStars from "../../Components/Rating";
import { useState } from 'react';
import { positivePoints, negativePoints } from "../../staticData/props";
import { satisfaction } from "../../staticData/props";
import { toast } from "react-toastify"

interface Iprops {
    id: number
    title: string
}

interface IratingResult {
    name: string
    rate: number
    positivePoints: string[]
    negativePoints: string[]
    description: string
}

const RatingPage = ({ name }: any) => {

    const successfullSubmitResult = () => toast("نظر شما با موفقیت ثبت شد.", { theme: 'colored', type: 'success', className: 'myTostify' });

    const [ratingResult, setRatingResult] = useState<IratingResult | null>(null)

    const [rating, setRating] = useState<number>(0);

    const [selectedPositiveProps, setSelectedPositiveProps] = useState<Iprops[]>([])
    const [selectedNegativeProps, setSelectedNegativeProps] = useState<Iprops[]>([])

    const [descriptionInputVal, setDescriptionInputVal] = useState<string>('')

    const [props, setProps] = useState<Iprops[]>(positivePoints)


    return (
        <>
            <div className="w-full md:w-[70%] mx-auto h-full flex flex-col justify-start lg:justify-between items-center gap-[16px] p-[8px] overflow-auto font-[vazir]">

                <p className="xl:text-[20px] font-[vazir-bold] order-1">ثبت بازخورد</p>

                <div dir="ltr" className="flex flex-col justify-center items-center gap-[8px] font-[vazir-bold] text-[14px] lg:text-[20px] xl:text-[24px] order-2">
                    <p>{name}</p>

                    <div>
                        <RatingStars
                            value={rating}
                            onChange={setRating}
                        />
                    </div>

                    <p>
                        {
                            satisfaction.map(item => {
                                if (item.rate == rating) {
                                    return item.perf
                                }
                            })
                        }
                    </p>
                </div>

                <textarea
                    value={descriptionInputVal}
                    onChange={(e) => setDescriptionInputVal(e.target.value)}
                    placeholder="نظر خود را در مورد خدمت دریافتی بنویسید."
                    rows={2}
                    className="resize-none w-full lg:h-[100px] xl:h-[120px] rounded-[4px] border-[1px] border-[#00919F] text-[#00919F] placeholder-[#00919F] lg:placeholder:text-[18px] text-[12px] lg:text-[16px] p-[8px] font-[vazir] order-3 lg:order-4"
                />

                <div className="w-full flex flex-col justify-center items-center gap-[12px] lg:gap-[20px] order-4 lg:order-3">
                    <div className="w-full lg:text-[18px] xl:text-[22px] flex justify-between items-center px-[15%]">
                        <p
                            className={`
                            ${props === positivePoints ? 'text-[#1F9291] underline underline-offset-8 decoration-2' : 'text-[#000000] decoration-none'} 
                            font-bold font-[vazir-bold] cursor-pointer`}
                            onClick={() => {
                                setProps(positivePoints)
                            }}
                        >
                            نقاط مثبت
                        </p>
                        <p
                            className={`
                            ${props === negativePoints ? 'text-[#1F9291] underline underline-offset-8 decoration-2' : 'text-[#000000] decoration-none'} 
                            font-bold font-[vazir-bold] cursor-pointer`}
                            onClick={() => {
                                setProps(negativePoints)
                            }}
                        >
                            نقاط منفی
                        </p>
                    </div>

                    <p className="text-[14px] lg:text-[16px] xl:text-[20px] font-[vazir]">
                        نقاط
                        {props === positivePoints ? ' مثبت ' : ' منفی '}
                        متخصص را انتخاب کنید
                    </p>

                    <div className="w-full grid grid-cols-2 justify-between items-center gap-x-[12px] gap-y-[4px]">
                        {
                            props.map((item) => {
                                return <button
                                    className={`
                                    ${props === positivePoints ? (selectedPositiveProps.find(prop => item.id === prop.id) ? 'bg-[#A7DCE1]' : '') : ''}
                                    ${props === negativePoints ? (selectedNegativeProps.find(prop => item.id === prop.id) ? 'bg-[#A7DCE1]' : '') : ''}
                                    rounded-[20px] py-[4px] border-[1px] border-[#1F9291] text-[#1F9291] text-[14px] lg:text-[16px] xl:text-[20px]
                                    `}
                                    onClick={() => {
                                        if (props === positivePoints) {
                                            if (selectedPositiveProps.includes(item)) {
                                                setSelectedPositiveProps(selectedPositiveProps.filter(temp => temp !== item))
                                            } else {
                                                setSelectedPositiveProps([...selectedPositiveProps, item])
                                            }
                                        } else if (props === negativePoints) {
                                            if (selectedNegativeProps.includes(item)) {
                                                setSelectedNegativeProps(selectedNegativeProps.filter(temp => temp !== item))
                                            } else {
                                                setSelectedNegativeProps([...selectedNegativeProps, item])
                                            }
                                        }
                                    }}
                                >
                                    {item.title}
                                </button>
                            })
                        }
                    </div>
                </div>

                <Button
                    color="greenBlue"
                    variant="primary"
                    className="w-full lg:w-[70%] lg:text-[18px] xl:text-[20px] mt-auto lg:mt-0 order-5"
                    onClick={() => {
                        setRatingResult({
                        name: name,
                        rate: rating,
                        positivePoints: selectedPositiveProps.map(item => item.title) ,
                        negativePoints: selectedNegativeProps.map(item => item.title),
                        description: descriptionInputVal
                    })
                    successfullSubmitResult()
                }}
                >ثبت بازخورد</Button>

            </div > 
        </>
    )
}

export default RatingPage