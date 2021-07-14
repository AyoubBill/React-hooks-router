import ted from "../img/ted.jpg"
import hangover from "../img/hangover.jpg"
import shutter from "../img/shutter-island.jpg"
import inception from "../img/inception.jpg"
import sunshine from "../img/sunshine.jpg"
import matrix from "../img/matrix.png"


const movieData = [
	{
		title: 'Ted',
		posterURL: ted,
		id: '1ed',
		rating: 3,
		description: `The film tells the story of John Bennett, a Boston native whose childhood wish brings his teddy bear friend Ted to life.
            However, in adulthood, Ted prevents John and his girlfriend Lori Collins from moving on with their lives.`
	},
	{
		title: 'The Hangover',
		posterURL: hangover,
		id: '2ed',
		rating: 2,
		description: `The film stars Bradley Cooper, Ed Helms, Zach Galifianakis, Heather Graham, Justin Bartha, Ken Jeong,
            and Jeffrey Tambor. It tells the story of Phil Wenneck, Stu Price, Alan Garner, 
            and Doug Billings, who travel to Las Vegas for a bachelor party to celebrate Doug's impending marriage.`
	},
    {
		title: 'Shutter Island',
		posterURL: shutter,
		id: '3ed',
		rating: 4,
		description: `In 1954, a U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital 
		    for the criminally insane. In 1954, up-and-coming U.S. marshal Teddy Daniels is assigned to investigate the disappearance 
            of a patient from Boston's Shutter Island Ashecliffe Hospital.`
	},
	{
		title: 'Sunshine',
		posterURL: sunshine,
		id: '4ed',
		rating: 1,
		description: `Sunshine is a 2007 science fiction psychological thriller film directed by Danny Boyle and written by Alex Garland. 
		    Taking place in the year 2057, the story follows a group of astronauts on a dangerous mission to reignite the dying Sun. ... 
			Sunshine explores physics, science and religion.`
	},
	{
		title: 'The Matrix',
		posterURL: matrix,
		id: '5ed',
		rating: 5,
		description: `The Matrix is a computer-generated dream world designed to keep these humans under control. Humans are kept sedated, 
		    effectively living a virtual life. Neo awakens in a bed back on Morpheus's ship, and Morpheus further explains 
			that one man was born into the Matrix with the power to change anything in it.`
	},
	{
		title: 'Inception',
		posterURL: inception,
		id: '6ed',
		rating: 4,
		description: `The film stars Leonardo DiCaprio as a professional thief who steals information by infiltrating the subconscious
		    of his targets. He is offered a chance to have his criminal history erased as payment for 
			the implantation of another person's idea into a target's subconscious.`
	}
]

export default movieData