"use client"

import TeamCard from "@/components/molecules/TeamCard";

const OurTeam = () => {
    return (
        <section className="py-8 lg:py-16">
            <div className="container">
                {
                    data?.map(({ _id, country, team }) => {
                        return (
                            <div className="not-last:mb-12" key={_id}>
                                <h2 className="text-5xl">Management Team - {country}</h2>
                                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {team?.map((item) => (
                                        <TeamCard key={item?._id} {...item} />
                                    ))}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default OurTeam

const data = [
    {
        _id: 1,
        country: "US",
        team: [
            {
                _id: 1,
                name: "Sudhanshu Khandelwal",
                role: "Founding Principal & Managing Partner",
                image: ""
            },
            {
                _id: 2,
                name: "Anshu Arora",
                role: "Managing Director – Operations",
                image: ""
            },
            {
                _id: 3,
                name: "Robert Sinewick",
                role: "Founding Principal & Managing Partner",
                image: ""
            }
        ]
    },
    {
        _id: 2,
        country: "India",
        team: [
            {
                _id: 1,
                name: "Sumeet Raisinghani",
                role: "Chief Operating Officer – Operations",
                image: ""
            },
            {
                _id: 2,
                name: "Vishnu Sharma",
                role: "Vice President - Operations",
                image: ""
            },
            {
                _id: 3,
                name: "Sonia Bali",
                role: "Senior Vice President - Human Resources",
                image: ""
            }
        ]
    }
]