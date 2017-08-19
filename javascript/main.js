console.log("hello")

var songs = [];
let editedSongs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

songs.unshift("Hello > by Adele on the album 25");
songs.push("She Will Be Loved > by Maroon 5 on the album Songs About Jane");

/*console.log("songs: ", songs); */

for (let i = 0; i < songs.length; i ++) {
	let newSongs = songs[i];
	
	newSongs = newSongs.replace(/>/, " - ");
	newSongs = newSongs.replace("*", "");
	newSongs = newSongs.replace("@", "");
	newSongs = newSongs.replace("(", "");
	newSongs = newSongs.replace("!", "");

editedSongs.push(newSongs);

}
console.log(editedSongs);


document.getElementById("main-content").innerHTML = `${editedSongs[0]}<br>${editedSongs[1]}<br>${editedSongs[2]}<br>${editedSongs[3]}<br>${editedSongs[4]}<br>${editedSongs[5]}<br>${editedSongs[6]}`;
