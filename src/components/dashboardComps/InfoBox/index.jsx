import Container from "@/components/globalComponents/Container"

const InfoBox = ({ info, title }) => {
    return (
        <>
            <Container style={'!w-full sm:!w-1/3'}>
                {/* <PiArticleNyTimesFill className="group-hover:text-white text-green" size={30} /> */}
                <span className="text-green group-hover:text-white font-semibold text-3xl">{info}</span>
                <h3 className="group-hover:text-green">{title}</h3>
            </Container>
        </>
    )
}

export default InfoBox