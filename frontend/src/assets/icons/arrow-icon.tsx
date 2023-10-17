

type props = {
    orderBy: string;
};

export function Arrow({ orderBy }: props) {

    if (orderBy === 'asc') {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={14}
                height={19}
                fill="none"
                style={{ transform: "rotate(0deg)", transition: "transform 0.5s ease-in" }}
            >
                <path
                    stroke="#385C85"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M7.167 17.5V2M2 7.167 7.167 2l5.166 5.167"
                />
            </svg>
        );
    } else {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={14}
                height={19}
                fill="none"
                style={{ transform: "rotate(180deg)", transition: "transform 0.5s ease-in" }}
            >
                <path
                    stroke="#385C85"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M7.167 17.5V2M2 7.167 7.167 2l5.166 5.167"
                />
            </svg>
        );
    }
}
