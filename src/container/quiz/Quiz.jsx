import { Navigation } from '../../components/navigation/Navigation';
import { useServiceQuiz } from '../../service/useServiceQuiz';

export const Quiz = () => {
    const { getQuizTag } = useServiceQuiz();

    getQuizTag();
    return (
        <>
            <Navigation />
        </>
    );
};
