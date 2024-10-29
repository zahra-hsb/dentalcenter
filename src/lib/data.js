import implant from '../../public/icons/🦆 emoji _tooth_.svg'
import toothClean from '../../public/icons/🦆 icon _teeth clean_.svg'
import toothDrill from '../../public/icons/🦆 icon _tooth drill_.svg'
import dentist from '../../public/icons/Group 3.svg'



import { TbDental } from "react-icons/tb";
import { TbDentalBroken, TbFreeRights } from "react-icons/tb";
import { GiToothbrush } from "react-icons/gi";
import { FaUserDoctor } from "react-icons/fa6";
import { RiContractFill } from "react-icons/ri";


import pic1 from '../../public/pictures/slides/8.jpg'
import pic2 from '../../public/pictures/slides/4.jpg'
import pic3 from '../../public/pictures/slides/5.jpg'
import pic4 from '../../public/pictures/slides/6.jpg'
import pic5 from '../../public/pictures/slides/7.jpg'


export const mainPageSlides = [
    { id: 1, icon: toothDrill, title1: 'ایمپلنت اقساطی', title2: 'پرداخت تا 6 ماه' },
    { id: 2, icon: toothClean, title1: 'روکش', title2: 'پروتز ثابت' },
    { id: 3, icon: implant, title1: 'ترمیم، لمینت', title2: 'کامپوزیت زیبایی' },
    { id: 4, icon: dentist, title1: 'درمان ریشه', title2: 'عصب کشی' },
    { id: 5, icon: dentist, title1: 'پروتز متحرک', title2: 'دندان مصنوعی' },
    { id: 6, icon: dentist, title1: 'دندانپزشکی اطفال', title2: 'ترمیم و کشیدن' },
]

export const mainPageTitlesSlides = [
    {
        id: 1, icon:
            <>
                <RiContractFill size={40} className="group-hover:text-white text-green" />
            </>, title: 'طرف قرارداد با بیمه سامان'
    },
    {
        id: 2, icon:
            <>
                <GiToothbrush size={40} className="group-hover:text-white text-green" />
            </>, title: ' آموزش مراقبت‌های پیشگیرانه بیماری‌های لثه و دندان'
    },
    {
        id: 3, icon:
            <>
                <TbDentalBroken size={40} className="group-hover:text-white text-green" />
            </>, title: 'کنترل پلاک و جرم'
    },
    {
        id: 4, icon:
            <>
                <TbDental size={40} className="group-hover:text-white text-green" />
            </>, title: 'ارائه بهترین روش‌های معاینه و تشخیص'
    },
    {
        id: 5, icon:
            <>
                <FaUserDoctor size={40} className="group-hover:text-white text-green" />
            </>, title: 'درمان بیماران با نهایت احترام و توجه به حساسیت‌ها'
    },
    {
        id: 6, icon:
            <>
                <TbFreeRights size={40} className="group-hover:text-white text-green" />
            </>, title: 'ویزیت و مشاوره رایگان'
    },
]


export const aboutPageSlides = [
    { id: 2, image: pic2, title: 'عنوان یا متن' },
    { id: 3, image: pic3, title: 'عنوان یا متن' },
    { id: 4, image: pic4, title: 'عنوان یا متن' },
    { id: 5, image: pic5, title: 'عنوان یا متن' },
    { id: 1, image: pic1, title: 'عنوان یا متن' },
]