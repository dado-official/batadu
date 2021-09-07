import { Fragment } from "react";
import PopoverElement from "../../../pages/spielen/[room]/PopoverElement";

function AntwortPopover({
    isHaltenWindow,
    is4erle,
    geboten,
    haltenHandler,
    ablehnenHandler,
    isSchlagtauschWindow,
    schlagTauschJaHandler,
    schlagTauschNeinHandler,
    isSchönereWindows,
    schönereJaHandler,
    schönereNeinHandler,
}) {
    return (
        <Fragment>
            <PopoverElement
                show={isHaltenWindow}
                noHandler={ablehnenHandler}
                yesHandler={haltenHandler}
                yesTitle="Halten"
                noTitle="Gehen"
            >
                <p className="w-max">
                    <span className="text-text font-medium">
                        {is4erle && geboten === 2 ? geboten + 2 : geboten + 1}
                    </span>{" "}
                    halten?
                </p>
            </PopoverElement>
            {/*fenster für schlagtausch */}
            <PopoverElement
                show={isSchlagtauschWindow}
                noHandler={schlagTauschNeinHandler}
                yesHandler={schlagTauschJaHandler}
                yesTitle="Ja"
                noTitle="Nein"
            >
                <p className="w-max">
                    Wollen Sie{" "}
                    <span className="text-text font-medium">Schlagtausch</span>{" "}
                    machen?
                </p>
            </PopoverElement>

            {/*fenster für  schönere*/}
            <PopoverElement
                show={isSchönereWindows}
                noHandler={schönereNeinHandler}
                yesHandler={schönereJaHandler}
                yesTitle="Ja"
                noTitle="Nein"
            >
                <p className="w-max">
                    Wollen Sie{" "}
                    <span className="text-text font-medium">Schönere</span>{" "}
                    machen?
                </p>
            </PopoverElement>
        </Fragment>
    );
}

export default AntwortPopover;
