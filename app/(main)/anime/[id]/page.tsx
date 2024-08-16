import { Anime as AnimeType } from "@/types/anime";
import React from "react";
import Anime from "./_components/Anime"
import { Button } from "@nextui-org/react";
import Review from "./_components/Review";
import ReviewForm from "./_components/ReviewForm"


function AnimeDetailsPage({ params }: { params: { id: number } }) {

  return (
    <div>
      {/* <Anime anime={animeDetails} /> */}
      <p className="text-xl font-bold mt-8 border-l-royal-purple border-l-8 pl-2 mt-8">Add your Review</p>
      <p className="mt-2 text-sm mb-8">Rate your favorite anime and let others know!</p>
      {/* <ReviewForm id={animeDetails.id} />
      {animeDetails.attributes.reviews &&
        reviewDetails &&
        reviewDetails.map((review) => <Review {...review} />)} */}
    </div>
  );
}

export default AnimeDetailsPage;
