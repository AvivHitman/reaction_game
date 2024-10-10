export enum GameState {
    TooEarly = "Too Soon !",
    TooLate = "Too Late !",
    Mistake = "Wrong key",
    Success = "Great Job !"
}

export const stateFeedbackMap: Record<GameState, "error" | "success"> = {
    [GameState.TooEarly]: "error",
    [GameState.TooLate]: "error",
    [GameState.Mistake]: "error",
    [GameState.Success]: "success",
};

export enum IndicatorPosition {
    Left = 'left',
    Right = 'right'
}

export const positionKeyMap: Record<IndicatorPosition, 'a' | 'l'> = {
    [IndicatorPosition.Left]: 'a',
    [IndicatorPosition.Right]: 'l'
};