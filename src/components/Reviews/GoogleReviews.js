import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
const google = {
  reviews: [
    {
      url: "https://www.google.com/maps/reviews/data=!4m5!14m4!1m3!1m2!1s108862058953295709863!2s0x0:0x8fbb6d7a0c48b5ae?hl=en-US",
      reviewer: "Sarah Ouellet",
      reviewer_avatar:
        "https://lh3.googleusercontent.com/a/AATXAJykEg0vtfk43k96tpwkqcYAicC4YS9v5N_u3Ymx=s120-c-c0x00000000-cc-rp-mo-ba2-br100",
      reviewer_id: "108862058953295709863",
      reviewer_url: "https://www.google.com/maps/contrib/108862058953295709863",
      datetime: "2021-08-16T18:25:00Z",
      rating: "5",
      text: "Get Axed is a great place for a fun night out.\nGreat beer and cider list.\nIt takes a bit to get the swing of it. Plan for 2 hours and recommend making reservations online, so there is no wait. The guys working were characters, fun times all around.",
      language: "en",
      id: "10356992139028116910-1629127534.512",
      likes: 0,
    },
    {
      url: "https://www.google.com/maps/reviews/data=!4m5!14m4!1m3!1m2!1s115594192798958316747!2s0x0:0x8fbb6d7a0c48b5ae?hl=en-US",
      reviewer: "April",
      reviewer_avatar:
        "https://lh3.googleusercontent.com/a-/AOh14Git6tedBKeKzaoSWqu5t7OKZYdSCRgaXpYV8nde-pA=s120-c-c0x00000000-cc-rp-mo-ba3-br100",
      reviewer_id: "115594192798958316747",
      reviewer_url: "https://www.google.com/maps/contrib/115594192798958316747",
      datetime: "2021-07-11T02:55:00Z",
      rating: "5",
      text: "My 1st time here. I was impressed.  The staff had this sarcastic banter..which I live for! They were helpful on trying to give my group pointers on how to actually make the axe stick. My advice throw it like a baseball. Loved that they had seltzers..not a big beer fan. They had everyone spread out...since it wasn't to busy. Went on a Saturday, mid day. Will definitely be going back. Lots of parking.",
      language: "en",
      id: "10356992139028116910-1625961358.911",
      likes: 1,
    },
    {
      url: "https://www.google.com/maps/reviews/data=!4m5!14m4!1m3!1m2!1s105650261298097780904!2s0x0:0x8fbb6d7a0c48b5ae?hl=en-US",
      reviewer: "Matt Overton",
      reviewer_avatar:
        "https://lh3.googleusercontent.com/a/AATXAJxyMmWEMabSO0YLqrIFYMZqsFBoKyEpyzozqLx_=s120-c-c0x00000000-cc-rp-mo-ba4-br100",
      reviewer_id: "105650261298097780904",
      reviewer_url: "https://www.google.com/maps/contrib/105650261298097780904",
      datetime: "2021-07-17T19:13:00Z",
      rating: "5",
      text: "My wife and I have been wanting to check out Get Axed, for awhile now. So on our date night we did. The staff was very friendly and helpful. They have a large beer selection, and several different games you can play while hatchet throwing. We had a great time, the other couples we spoke with all where friendly and seemed to enjoy themselves as well. If your a local looking for something different, or from out of town, looking for an out of the box adventure for a get together with friends, family, or date night, give Get Axed a try, and enjoy yourselves.",
      language: "en",
      id: "10356992139028116910-1626538387.217",
      likes: 0,
    },
    {
      url: "https://www.google.com/maps/reviews/data=!4m5!14m4!1m3!1m2!1s113585918170614329131!2s0x0:0x8fbb6d7a0c48b5ae?hl=en-US",
      reviewer: "Tori Turner",
      reviewer_avatar:
        "https://lh3.googleusercontent.com/a/AATXAJyjxUe0OTg4QX-e0Q6TYGMg1e9jyI_1k-WQOIwj=s120-c-c0x00000000-cc-rp-mo-ba2-br100",
      reviewer_id: "113585918170614329131",
      reviewer_url: "https://www.google.com/maps/contrib/113585918170614329131",
      datetime: "2021-06-16T18:47:00Z",
      rating: "5",
      text: "This place is incredible. So much fun.. and affordable!! Great menu of adult beverages.  Only thing is they don't serve food...but you are allowed to bring food in. The employees are also fun and helpful!",
      language: "en",
      id: "10356992139028116910-1623858445.233",
      likes: 0,
    },
    {
      url: "https://www.google.com/maps/reviews/data=!4m5!14m4!1m3!1m2!1s102572646760986418671!2s0x0:0x8fbb6d7a0c48b5ae?hl=en-US",
      reviewer: "Ashley O",
      reviewer_avatar:
        "https://lh3.googleusercontent.com/a-/AOh14GjV-HuvNckXFxnKd_GEde9P55prrEwygwM3M0eVeg=s120-c-c0x00000000-cc-rp-mo-ba3-br100",
      reviewer_id: "102572646760986418671",
      reviewer_url: "https://www.google.com/maps/contrib/102572646760986418671",
      datetime: "2021-07-19T00:43:00Z",
      rating: "5",
      text: "My husband and I went here for a date night on Friday. We weren't sure what to expect but the staff was amazing, drinks were good and we had a blast throwing axes and tomahawks. Highly recommend! We'll be bringing a group of friends with us next time 🪓",
      language: "en",
      id: "10356992139028116910-1626644603.532",
      likes: 0,
    },
    {
      url: "https://www.google.com/maps/reviews/data=!4m5!14m4!1m3!1m2!1s100227723179524425137!2s0x0:0x8fbb6d7a0c48b5ae?hl=en-US",
      reviewer: "Tanner A",
      reviewer_avatar:
        "https://lh3.googleusercontent.com/a/AATXAJy13Mx39Rp4P09DqslleMNzjRmXR6q2x149Me5r=s120-c-c0x00000000-cc-rp-mo-ba3-br100",
      reviewer_id: "100227723179524425137",
      reviewer_url: "https://www.google.com/maps/contrib/100227723179524425137",
      datetime: "2021-08-11T01:17:00Z",
      rating: "5",
      text: "Lots  of fun. They use a projector screen so you can play games and have moving targets. Axes and lanes were all in good condition. Great beer selection. Will definitely be back.",
      language: "en",
      id: "10356992139028116910-1628633864.827",
      likes: 0,
    },
    {
      url: "https://www.google.com/maps/reviews/data=!4m5!14m4!1m3!1m2!1s104161536775506533185!2s0x0:0x8fbb6d7a0c48b5ae?hl=en-US",
      reviewer: "Kassy Baezies",
      reviewer_avatar:
        "https://lh3.googleusercontent.com/a-/AOh14GjHxuEqxjqIsJuLgE6JZfk7NGzJ8_M6FToHYjQZ=s120-c-c0x00000000-cc-rp-mo-ba4-br100",
      reviewer_id: "104161536775506533185",
      reviewer_url: "https://www.google.com/maps/contrib/104161536775506533185",
      datetime: "2021-04-09T21:45:00Z",
      rating: "5",
      text: "Better than we expected!! You throw axes at a projected screen on the wood wall which means you can play different games and have a different experience each round. Lots of beer and chip selections but unfortunately no food (or food truck). They said you can bring in your own food though. Staff was very helpful and kind. Each table can accommodate up to 6 people to throw axes.",
      language: "en",
      id: "10356992139028116910-1617993905.262",
      likes: 1,
    },
    {
      url: "https://www.google.com/maps/reviews/data=!4m5!14m4!1m3!1m2!1s101143176403313740955!2s0x0:0x8fbb6d7a0c48b5ae?hl=en-US",
      reviewer: "Cil cill",
      reviewer_avatar:
        "https://lh3.googleusercontent.com/a/AATXAJy3w70x6BRfhHg3yY77KMCd5ARwPYKwCVSaceRO=s120-c-c0x00000000-cc-rp-mo-br100",
      reviewer_id: "101143176403313740955",
      reviewer_url: "https://www.google.com/maps/contrib/101143176403313740955",
      datetime: "2021-07-23T19:30:00Z",
      rating: "5",
      text: "Great experience!  We took our teenagers and they loved it!  Aaron and the staff made us feel welcome and the axe throwing tutorial he gave helped us to score.  I strongly recommend trying this place out.  We are definitely going back!",
      language: "en",
      id: "10356992139028116910-1627057827.898",
      likes: 0,
    },
    {
      url: "https://www.google.com/maps/reviews/data=!4m5!14m4!1m3!1m2!1s100161725273795190360!2s0x0:0x8fbb6d7a0c48b5ae?hl=en-US",
      reviewer: "Mel",
      reviewer_avatar:
        "https://lh3.googleusercontent.com/a/AATXAJxVwzA2KMiPq2lr4qvRKpojfRRbllscfngQ1UAW=s120-c-c0x00000000-cc-rp-mo-br100",
      reviewer_id: "100161725273795190360",
      reviewer_url: "https://www.google.com/maps/contrib/100161725273795190360",
      datetime: "2021-06-27T08:38:00Z",
      rating: "5",
      text: "The best place to GET AXED..lol\nLots of fun and great people that work there. They're helpful and customer service is awesome. Best part of all the prices. $35 for 2 hours of axe throwing.  It's so worth it. Thanks guys!!!",
      language: "en",
      id: "10356992139028116910-1624772319.678",
      likes: 0,
    },
    {
      url: "https://www.google.com/maps/reviews/data=!4m5!14m4!1m3!1m2!1s113743576160752726464!2s0x0:0x8fbb6d7a0c48b5ae?hl=en-US",
      reviewer: "Maria Liverett",
      reviewer_avatar:
        "https://lh3.googleusercontent.com/a-/AOh14GiYAY0Sa5y_B_t_CSIJEs71eON9D5Y3-_7t1VDN=s120-c-c0x00000000-cc-rp-mo-ba6-br100",
      reviewer_id: "113743576160752726464",
      reviewer_url: "https://www.google.com/maps/contrib/113743576160752726464",
      datetime: "2021-06-12T23:40:00Z",
      rating: "5",
      text: 'Great place to play what I call Redneck golf"',
      language: "en",
      id: "10356992139028116910-1623530400.512",
      likes: 1,
    },
  ],
  totals: {
    average_rating: "4.8",
    review_count: 92,
  },
  place_details: {
    address: "721 Sterling Pkwy #200, Lincoln, CA 95648",
    name: "Get Axed",
  },
};
export default function GoogleReviews() {
    return (
            <Carousel 
                responsive={responsive}
                swipeable={true}
                draggable={true}
                infinite={true}
                keyBoardControl={true}
            >
                {
                    google.reviews.map(review => {
                        return (
                            <div className="px-12">
                                <div className="text-center">
                                    {
                                        Array.from({ length: parseInt(review.rating) }, (_, k) => (
                                            <i className="fas fa-star"></i>
                                        ))
                                    }
                                </div>
                                <div className="pt-6 text-center">
                                    <h5 className="text-xl font-bold">{review.reviewer}</h5>
                                    <p className="mt-1 text-sm text-blueGray-400">
                                        { (review.text.length > 100) ? review.text.slice(0, 100) + "..." : review.text }
                                    </p>
                                    <div className="mt-6">
                                        <button
                                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                        type="button"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            window.open(review.url, "_blank");
                                        }}
                                        >
                                        <i className="fab fa-google"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </Carousel>
    
    )
}
