import * as Toast from "@radix-ui/react-toast"
import { useEffect, useRef, useState } from "react"

function oneWeekAway() {
    const now = new Date();
    const inOneWeek = now.setDate(now.getDate() + 7);
    return new Date(inOneWeek);
}

function prettyDate(date: Date) {
    return new Intl.DateTimeFormat('en-US',
        { dateStyle: 'full', timeStyle: 'short' }).format(date);
}

export const ToastDemo = () => {
    const [open, setOpen] = useState(false);
    const eventDateRef = useRef(new Date());
    const timerRef = useRef(0);

    useEffect(() => {
        return () => clearTimeout(timerRef.current);
    }, []);

    return (
        <header>
            <h3>ToastDemo</h3>
            <Toast.Provider swipeDirection="left">
                <button onClick={() => {
                    if (open) {
                        setOpen(false);
                        setTimeout(()=>{
                            setOpen(true);
                        }, 100);
                    }else{
                        setOpen(true)
                    }

                    window.clearTimeout(timerRef.current);
                    timerRef.current = window.setTimeout(() => {
                        eventDateRef.current = oneWeekAway();
                        setOpen(true);
                    }, 100);
                }}>Add to calendar</button>

                <Toast.Root open={open} onOpenChange={setOpen}>
                    <Toast.Title>Scheduled: Gotta Catch up!!</Toast.Title>
                    <Toast.Description asChild>
                        <time dateTime={eventDateRef.current.toISOString()}>
                            {prettyDate(eventDateRef.current)}
                        </time>
                    </Toast.Description>
                    <Toast.Action asChild altText="Goto schedule" />
                    {/* <Toast.Close /> */}
                    <Toast.Viewport className="fixed b-0 r-0 flex flex-col space-x-[10px] w-[390px] max-w-screen-md m-0 " />
                </Toast.Root>
            </Toast.Provider>
        </header>
    )
};


