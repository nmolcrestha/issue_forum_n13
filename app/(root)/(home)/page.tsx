import Filter from "@/components/shared/Filter";
import HomeFilter from "@/components/shared/HomeFilter";
import NoResult from "@/components/shared/NoResult";
import LocalSearchBar from "@/components/shared/search/LocalSearchBar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filter";
import Link from "next/link";

const questions = [
  // {
  //   _id: 1,
  //   title: "Cascading Deletes in SQLAlchemy?",
  //   tags: [
  //     { _idL: 1, name: "python" },
  //     { _id: 2, name: "sql" },
  //   ],
  //   author: "John Doe",
  //   upvotes: 10,
  //   views: 100,
  //   answer: 2,
  //   createdAt: "2022-02-01 T12:00:00:000Z",
  // },
  // {
  //   _id: 1,
  //   title: "How to center a div?",
  //   tags: [
  //     { _idL: 1, name: "css" },
  //     { _id: 2, name: "html" },
  //   ],
  //   author: "Steve Lui",
  //   upvotes: 5,
  //   views: 170,
  //   answer: 6,
  //   createdAt: "2022-02-01 T12:00:00:000Z",
  // },
];

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Question</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchBar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
        <HomeFilter />
      </div>

      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => "Question")
        ) : (
          <NoResult
            title="There's no questions to show"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus fugit
          autem, obcaecati ex magnam quibusdam. At nemo error aliquam vero,
          veritatis, porro voluptate architecto provident minus, consectetur
          pariatur repellendus non."
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
}
