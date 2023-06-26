import { Component, OnInit, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.scss'],
})
export class TicTacToeComponent implements OnInit {
  public gameArray = signal(Array<PlayerSign>(9));
  public player = PlayerSign.Cross; //default first player
  public gameOver = false;
  private columns = [
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];
  private rows = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ];
  private diagonals = [
    [0, 4, 8],
    [2, 4, 6],
  ];

  constructor() {
    effect(() => {
      if (this.gameArray().filter((x) => x !== null).length) {
        this.checkResult();
        if (this.gameOver === false) {
          this.changePlayer();
        }
      }
    });
  }

  public ngOnInit(): void {}

  restartGame(): void {
    this.gameArray.set(Array<PlayerSign>(9));
    this.player = PlayerSign.Cross;
    this.gameOver = false;
  }

  public tileClicked(index: number) {
    if (this.tileAvailable(index)) {
      this.fillTile(index);
    }
  }

  private fillTile(index: number): void {
    this.gameArray.mutate((arr) => (arr[index] = this.player));
  }

  private tileAvailable(index: number): boolean {
    const tile = this.gameArray()[index];
    return (tile === null || tile === undefined) && this.gameOver === false;
  }

  private changePlayer(): void {
    this.player =
      this.player === PlayerSign.Cross ? PlayerSign.Circle : PlayerSign.Cross;
  }

  private checkResult(): void {
    this.checkColumns();
    this.checkRows();
    this.checkDiagonals();
  }

  private checkColumns(): void {
    this.columns.forEach((column) => {
      if (this.checkLine(column)) {
        this.gameOver = true;
      }
    });
  }

  private checkRows(): void {
    this.rows.forEach((row) => {
      if (this.checkLine(row)) {
        this.gameOver = true;
      }
    });
  }

  private checkDiagonals(): void {
    this.diagonals.forEach((diagonal) => {
      if (this.checkLine(diagonal)) {
        this.gameOver = true;
      }
    });
  }

  private checkLine(line: Array<number>): boolean {
    return (
      line.every((value) => this.gameArray()[value] === PlayerSign.Circle) ||
      line.every((value) => this.gameArray()[value] === PlayerSign.Cross)
    );
  }
}

export enum PlayerSign {
  Circle = 'O',
  Cross = 'X',
}
