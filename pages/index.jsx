import Footer from '../components/Footer';
import Banner from '../components/HomeComponents/Banner';
import MyExpertise from '../components/HomeComponents/Expertise/MyExpertise';
import Recommendations from '../components/HomeComponents/Recommendations/Recommendations';
import PortfolioCard from '../components/Portfolio/PortfolioCard';
import { useQuery } from 'react-query';
import axios from 'axios';
import ImageAndParagraphSkeleton from '../components/Common/ImageAndParagraphSkeleton';

const home = () => {
    const { isLoading, error, data } = useQuery('portfolio', () =>
        axios.get('api/portfolio')
            .then(({ data }) => data)
            .catch(error => console.error('Error fetching portfolio:', error)))

    return (
        <div className="Home-Page -z-10">
            <Banner />
            <MyExpertise />
            <Recommendations />
            
            {/* Portfolio Section */}
            <div className="px-5 py-10 lg:py-14">
                <div className="flex flex-col justify-center items-center">
                    <p className="text-Green text-xs tracking-widest">PORTFOLIO</p>
                    <h1 className="text-Snow text-2xl lg:text-4xl">Recent Projects</h1>
                </div>
                <div className="grid justify items-center grid-flow-row md:grid-cols-2 grid-rows-auto gap-4 px-8 my-6">
                    {isLoading ?
                        [1, 2, 3, 4].map((_, index) => (
                            <ImageAndParagraphSkeleton key={index} className={"w-full object-cover"} />
                        ))
                        :
                        data?.map((data, key) => (
                            <PortfolioCard key={key} data={data} />
                        ))
                    }
                </div>
            </div>
            
            <Footer />
        </div>
    )
}

export default home