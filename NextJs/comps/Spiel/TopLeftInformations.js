import SpectatorElement from "./SpectatorElement";

function TopLeftInformations({ room, spectators }) {
    return (
        <div className="fixed left-8 top-8 ml-20">
            <h5 className="font-semibold">{room}</h5>
            {spectators && spectators.length > 0 && (
                <p>Zuschauer: {spectators.length}</p>
            )}
            {spectators.map((element) => (
                <SpectatorElement data={element} key={element.key} />
            ))}
        </div>
    );
}

export default TopLeftInformations;
