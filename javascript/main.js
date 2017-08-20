console.log("hello")

let main = document.getElementById("main-content");
let addBtn = document.getElementById("add-btn");
let nameInput = document.getElementById("sName-input");
let artistInput = document.getElementById("sArtist-input");
let albumInput = document.getElementById("sAlbum-input");
let genreInput = document.getElementById("sGenre-input");

var songs = [];

songs.push ({
	songName: "Legs",
	Artist: "ZZTop",
	Album: "Eliminator",
	Genre: "Rock"
});

songs.push ({
	songName: "The Logical Song",
	Artist: "Supertramp",
	Album: "Breakfast in America",
	Genre: "Rock"
});

songs.push ({
	songName: "Another Brick in the Wall",
	Artist: "Pink Floyd",
	Album: "The Wall",
	Genre: "Rock"
});

songs.push ({
	songName: "Welcome to the Jungle",
	Artist: "Guns & Roses",
	Album: "Appetite for Destruction",
	Genre: "Rock"
});

songs.push ({
	songName: "Ironic",
	Artist: "Alanis Morisette",
	Album: "Jagged Little Pill",
	Genre: "Rock"
});

songs.unshift ({
	songName: "Hello",
	Artist: "Adele",
	Album: "25",
	Genre: "Pop"
});

songs.push ({
	songName: "She Will Be Loved",
	Artist: "Maroon 5",
	Album: "Songs About Jane",
	Genre: "Pop"
});

console.log("song list", songs[0].songName);

for (let i = 0; i < songs.length; i++) {
	main.innerHTML += `<h2>${songs[i].songName}</h2>
					   <p class="song-p">${songs[i].Artist} | ${songs[i].Album} | ${songs[i].Genre}</p>`;
}

addBtn.addEventListener("click", addSong);

function addSong() {
	let userSongName = nameInput.value;
	let userArtist = artistInput.value;
	let userAlbum = albumInput.value;
	let userGenre = genreInput.value;

	songs.push ({
		songName: userSongName,
		Artist: userArtist,
		Album: userAlbum,
		Genre: userGenre,
	});

console.log("new songs", songs);

main.innerHTML += `<h2>${userSongName}</h2>
				   <p class="song-p">${userArtist} | ${userAlbum} | ${userGenre}</p>`;
}

/*var songs = [];
let editedSongs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

songs.unshift("Hello > by Adele on the album 25");
songs.push("She Will Be Loved > by Maroon 5 on the album Songs About Jane");

/*console.log("songs: ", songs); */
/*
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
*/
