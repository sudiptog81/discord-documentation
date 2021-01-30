/* eslint-disable max-len */
import { CommandInt } from 'src/assets/interfaces/CommandInt';

export const gameCommands: CommandInt[] = [
  {
    name: 'adventure',
    description:
      'This command will generate a text based adventure dungeon. To begin a new dungeon, pass start as the [action]. The dungeon take you room by room, with each room having a [room] id value and directions to move. Move to the next room by passing move as the [action], the [room] id provided, and the cardinal [direction] you want to move. Each room embed includes a prefilled move command to copy-paste.',
    parameters: '[action (start/move)] [?room] [?direction]',
  },
  {
    name: 'cat',
    description:
      'This command sends a random string of letters of a random length, to simulate a cat walking across your keyboard.',
  },
  {
    name: 'challenge',
    description:
      'This command walks the user through a series of programming based challenge questions. To begin a new challenge, pass start as the [action]. Becca will return a challenge embed, which includes the question and challenge id. To solve the challenge, pass solve as the [action], with the challenge [id] and the [answer]. She will respond with either correct or incorrect, and an explanation. If correct, she provides the [id] for the next challenge. To get that challenge, pass request as the [action] with the new [id].',
    parameters: '[action (start/request/solve)] [?id] [?answer]',
  },
  {
    name: 'dnd',
    description:
      'This command generates an embed containing the currently available Dungeons and Dragons commands.',
  },
  {
    name: 'dndclass',
    description:
      ' This command generates an embed containing information about the Dungeons and Dragons [class].',
    parameters: '[class]',
  },
  {
    name: 'dndmon',
    description:
      'This command generates an embed containing information about the Dungeons and Dragons [monster].',
    parameters: '[monster]',
  },
  {
    name: 'dndrace',
    description:
      'This command generates an embed containing information about the Dungeons and Dragons [race].',
    parameters: '[race]',
  },
  {
    name: 'dndschool',
    description:
      'This command generates an embed containing information about the Dungeons and Dragons [school] of magic.',
    parameters: '[school]',
  },
  {
    name: 'dndspell',
    description:
      'This command generates an embed containing information about the Dungeons and Dragons [spell].',
    parameters: '[spell]',
  },
  {
    name: 'fact',
    description: 'This command generates an embed containing a fun fact!',
  },
  {
    name: 'fortune',
    description: `This command will send a message to the channel the command came from. The message will contain a random fortune cookie quote from the list provided in Becca's code.`,
  },
  {
    name: 'guess',
    description:
      'This command starts a game of Guess the Number. Becca will generate a number between 1 and 1000. Players have ten seconds to submit guesses, then she will announce the winner based on the closest guess.',
  },
  {
    name: 'habitica',
    description:
      'This command returns an embed containing profile information for the provided Habitica user. [id] is the userID, *not* the user name.',
    parameters: '[id]',
  },
  {
    name: 'joke',
    description: 'This command tells you a silly joke!',
  },
  {
    name: 'kirby',
    description:
      'This command sends a message to the channel the command came from. The message contains Kirby doing a little dance.',
  },
  {
    name: 'magic',
    description:
      'This command querys the Magic: The Gathering API for cards that match [cardname]. Becca will send a message to the channel the message contains to confirm the command was received and the search was started. For each card she finds, Becca sends an embed containing the card information. She sends a notification after 30 seconds, when the search is complete. NOTE: The API can be slow to respond so this command may take some time.',
    parameters: '[cardname]',
  },
  {
    name: 'maze',
    description:
      'This command walks the user through a series of programming based challenge questions. To get a maze, pass request as the [action]. Becca will return a maze embed, which includes information about the maze and its id. To solve the maze, pass solve as the [action], with the maze [id] and the [answer]. The [answer] should be a null-space string of cardinal directions (`NEEESSWN`). Becca will respond with either correct or incorrect, and an explanation.',
    parameters: '[action request/solve] [?id] [?direction]',
  },
  {
    name: 'piglatin',
    description:
      'This command takes a sentence as a space-delimited [string] and returns an embed containing the original sentence and the sentence translated into Pig Latin.',
    parameters: '[string]',
  },
  {
    name: 'pokename',
    description: `This command querys the Pokemon API. If Becca finds a Pokemon that matches the name provided, she will send an embed containing the Pokemon's name, number, and image. If she cannot find a Pokemon, she will send a message notice.`,
    parameters: '[name]',
  },
  {
    name: 'pokenum',
    description: `This command querys the Pokemon API. If Becca finds a Pokemon that matches the number provided, she will send an embed containing the Pokemon's name, number, and image. If no Pokemon is found, she will send a message notice. As an alternative, sending random instead of a number will cause Becca to return a random Pokemon.`,
    parameters: '[number]',
  },
  {
    name: 'riddle',
    description:
      'This command walks the user through a series of programming based challenge questions. To begin a new challenge, pass start as the [action]. Becca will return a riddle embed, which includes the question and riddle id. To solve the riddle, pass solve as the [action], with the riddle [id] and the [answer]. Becca will respond with either correct or incorrect, and an explanation. If correct, she provides the [id] for the next riddle. To get that challenge, pass request as the [action] with the new [id].',
    parameters: '[action (start/request/solve)] [?id] [?answer]',
  },
  {
    name: 'roll',
    description:
      'This command returns a random number between 1 and [number], as if it was a dice roll.',
    parameters: 'd[number]',
  },
  {
    name: 'sus',
    description:
      'This command sends a message embed to the channel the user called the command in. The command will say that a certain color looks sus just like in Among Us Emergency Meetings.',
  },
  {
    name: 'title',
    description:
      'This command will generate a random and often funny title for the user who calls it.',
  },
  {
    name: 'trivia',
    description:
      'This command fetches a trivia question and returns an embed. The question is multiple choice, and Becca will listen for answers to the question. After 30 seconds, she will display the correct answer and announce any winners.',
  },
  {
    name: 'wiki',
    description:
      'This command returns a link to the wikipedia article for [query]. If the article is not found, it returns the search page instead.',
    parameters: '[query]',
  },
  {
    name: 'xkcd',
    description: `This command returns an embed containing today's XKCD comic. Optionally pass a comic [number] to get that specific comic instead.`,
    parameters: '[?number]',
  },
];
