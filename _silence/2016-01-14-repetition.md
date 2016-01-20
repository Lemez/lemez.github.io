I felt today, during the Bala Mantra, the purity of repetition, as clearly as I did when I fell in love with sampling, hiphop, repetitive beats. Hiphop is mantra-based, except that the music is the mantra, and the words on top are a storytelling, a narrative process. It is as clear a combination of purity and artifice (theatre) as you can find in music, anywhere. The narrative is clearly fiction, posturing, character-based, even when it purports to be true.

It is the outpouring of expression in a continuous flow on top of a drone, a mantra of loops.

An idea for a project, a compositional project.

I will take the syllable count of the Bala Japam:
Om srim hrim krim glaum gam ganapati vara varada sujasam varasana na (check), and make it into a musical phrase, following the intonation and pitch of the voice.

Each repetition will be one offering of the mantra.

The piece will be 108 phrases long. It will be called 108.

It will be computationally generated. Each phrase will be repeated 108 times. All the other phrases will be shorter in terms of syllable and time count that the other. They will be timed to come in at different moments, and come out when their repetitions are done.

It will look something like this:

								         X
								        XXXX
							       XXXXXXXXXXXXXX
						      XXXXXXXXXXXXXXXXXXXXXXX
				    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
			  XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
		XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

a pyramid of computationally generated sound, that builds to a climax and subsides.

It will need the following components:

- instruments, one for each layer. They will be warm, like the sound bath: bowls, percussion, xylophones, bells, a piano with warm reverb
- midi phrases, computed in different lengths, with 1 being the length of the mantra phrase, and all other phrases being <1. If the first phrase lasts 100 ms, the next phrase must last 50ms, 25ms, 12.5ms, 6.25ms, 3.125ms and so on, down to a granular grittiness.
- the total time of the phrase can be the phrase itself plus its space.

=> N = the phrase number [1..100]

=> L = CONSTANT total phrase length in the piece
=> R = number of repetitions

=> A = syllable count of the phrase
=> Z = length of a breath (we can try both, with Z as a constant, and with z as a variable)

=> l = individual phrase length
=> ł = total individual phrase length

=> S = starting time


==> S = (L - ł)/2 


									L     l    ł	A   Z   N   S    R
				AAAZAAAZAAAZAAAZ  	16    4    16 	3   1   1   0	 4	
				  AAAZAAAZAAAZ		16	  4	   12	3	1 	2 	2	 2		 

 



- a start point, and an end point (measured in samples, or time MS)
- each phrase will contain the number 108, probably in the form of 108 repetitions

