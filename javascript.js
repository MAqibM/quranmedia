
/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  });
}

/*
	When the bandcamp link is pressed, stop all propagation so AmplitudeJS doesn't
	play the song.
*/
let bandcampLinks = document.getElementsByClassName('bandcamp-link');

for( var i = 0; i < bandcampLinks.length; i++ ){
	bandcampLinks[i].addEventListener('click', function(e){
		e.stopPropagation();
	});
} 


let songElements = document.getElementsByClassName('song');

for( var i = 0; i < songElements.length; i++ ){
	/*
		Ensure that on mouseover, CSS styles don't get messed up for active songs.
	*/
	songElements[i].addEventListener('mouseover', function(){
		this.style.backgroundColor = '#00A0FF';

		this.querySelectorAll('.song-meta-data .song-title')[0].style.color = '#FFFFFF';
		this.querySelectorAll('.song-meta-data .song-artist')[0].style.color = '#FFFFFF';

		if( !this.classList.contains('amplitude-active-song-container') ){
			this.querySelectorAll('.play-button-container')[0].style.display = 'block';
		}

		this.querySelectorAll('img.bandcamp-grey')[0].style.display = 'none';
		this.querySelectorAll('img.bandcamp-white')[0].style.display = 'block';
		this.querySelectorAll('.song-duration')[0].style.color = '#FFFFFF';
	});

	/*
		Ensure that on mouseout, CSS styles don't get messed up for active songs.
	*/
	songElements[i].addEventListener('mouseout', function(){
		this.style.backgroundColor = '#FFFFFF';
		this.querySelectorAll('.song-meta-data .song-title')[0].style.color = '#272726';
		this.querySelectorAll('.song-meta-data .song-artist')[0].style.color = '#607D8B';
		this.querySelectorAll('.play-button-container')[0].style.display = 'none';
		this.querySelectorAll('img.bandcamp-grey')[0].style.display = 'block';
		this.querySelectorAll('img.bandcamp-white')[0].style.display = 'none';
		this.querySelectorAll('.song-duration')[0].style.color = '#607D8B';
	});

	/*
		Show and hide the play button container on the song when the song is clicked.
	*/
	songElements[i].addEventListener('click', function(){
		this.querySelectorAll('.play-button-container')[0].style.display = 'none';
	});
}

/*
	Initializes AmplitudeJS
*/
Amplitude.init({
	"songs": [
		{
			"name": "Surat Al-Fatihah",
			"artist": "Abdullah Awad al-Juhani",
			"album": "Chapter 1",
			"url": "https://server11.mp3quran.net/bilal/001.mp3",
			"cover_art_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TAQ6jtsdDVV7k1MsUCTdBLSdCpftxnTcknSWix08jJwgalc4"
		},
		{
			"name": "Surat Al-Fatihah",
			"artist": "Abdullah Awad al-Juhani",
			"album": "Chapter 1",
			"url": "https://ia801507.us.archive.org/20/items/001_20190803/001.mp3?cnt=0",
			"cover_art_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TAQ6jtsdDVV7k1MsUCTdBLSdCpftxnTcknSWix08jJwgalc4"
		},
		{
			"name": "Surat Al-Fatihah",
			"artist": "Abdullah Awad al-Juhani",
			"album": "Chapter 1",
			"url": "https://ia801507.us.archive.org/20/items/001_20190803/001.mp3?cnt=0",
			"cover_art_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TAQ6jtsdDVV7k1MsUCTdBLSdCpftxnTcknSWix08jJwgalc4"
		},
		{
			"name": "Surat Al-Fatihah",
			"artist": "Abdullah Awad al-Juhani",
			"album": "Chapter 1",
			"url": "https://ia801507.us.archive.org/20/items/001_20190803/001.mp3?cnt=0",
			"cover_art_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TAQ6jtsdDVV7k1MsUCTdBLSdCpftxnTcknSWix08jJwgalc4"
		},
        {
			"name": "Surat Al-Fatihah",
			"artist": "Abdullah Awad al-Juhani",
			"album": "Chapter 1",
			"url": "https://ia801507.us.archive.org/20/items/001_20190803/001.mp3?cnt=0",
			"cover_art_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TAQ6jtsdDVV7k1MsUCTdBLSdCpftxnTcknSWix08jJwgalc4"
		},
		{
			"name": "Surat Al-Fatihah",
			"artist": "Abdullah Awad al-Juhani",
			"album": "Chapter 1",
			"url": "https://ia801507.us.archive.org/20/items/001_20190803/001.mp3?cnt=0",
			"cover_art_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TAQ6jtsdDVV7k1MsUCTdBLSdCpftxnTcknSWix08jJwgalc4"
		},
		{
			"name": "Surat Al-Fatihah",
			"artist": "Abdullah Awad al-Juhani",
			"album": "Chapter 1",
			"url": "https://ia801507.us.archive.org/20/items/001_20190803/001.mp3?cnt=0",
			"cover_art_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TAQ6jtsdDVV7k1MsUCTdBLSdCpftxnTcknSWix08jJwgalc4"
		},
		{
			"name": "Surat Al-Fatihah",
			"artist": "Abdullah Awad al-Juhani",
			"album": "Chapter 1",
			"url": "https://ia801507.us.archive.org/20/items/001_20190803/001.mp3?cnt=0",
			"cover_art_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TAQ6jtsdDVV7k1MsUCTdBLSdCpftxnTcknSWix08jJwgalc4"
		},
        {
			"name": "Surat Al-Fatihah",
			"artist": "Abdullah Awad al-Juhani",
			"album": "Chapter 1",
			"url": "https://ia801507.us.archive.org/20/items/001_20190803/001.mp3?cnt=0",
			"cover_art_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TAQ6jtsdDVV7k1MsUCTdBLSdCpftxnTcknSWix08jJwgalc4"
		},
		{
			"name": "Surat Al-Fatihah",
			"artist": "Abdullah Awad al-Juhani",
			"album": "Chapter 1",
			"url": "https://ia801507.us.archive.org/20/items/001_20190803/001.mp3?cnt=0",
			"cover_art_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TAQ6jtsdDVV7k1MsUCTdBLSdCpftxnTcknSWix08jJwgalc4"
		},
		{
			"name": "Surat Al-Fatihah",
			"artist": "Abdullah Awad al-Juhani",
			"album": "Chapter 1",
			"url": "https://ia801507.us.archive.org/20/items/001_20190803/001.mp3?cnt=0",
			"cover_art_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TAQ6jtsdDVV7k1MsUCTdBLSdCpftxnTcknSWix08jJwgalc4"
		},
		{
			"name": "Surat Al-Fatihah",
			"artist": "Abdullah Awad al-Juhani",
			"album": "Chapter 1",
			"url": "https://ia801507.us.archive.org/20/items/001_20190803/001.mp3?cnt=0",
			"cover_art_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TAQ6jtsdDVV7k1MsUCTdBLSdCpftxnTcknSWix08jJwgalc4"
		},
        {
			"name": "Surat Al-Fatihah",
			"artist": "Abdullah Awad al-Juhani",
			"album": "Chapter 1",
			"url": "https://ia801507.us.archive.org/20/items/001_20190803/001.mp3?cnt=0",
			"cover_art_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TAQ6jtsdDVV7k1MsUCTdBLSdCpftxnTcknSWix08jJwgalc4"
		},
		{
			"name": "Surat Al-Fatihah",
			"artist": "Abdullah Awad al-Juhani",
			"album": "Chapter 1",
			"url": "https://ia801507.us.archive.org/20/items/001_20190803/001.mp3?cnt=0",
			"cover_art_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TAQ6jtsdDVV7k1MsUCTdBLSdCpftxnTcknSWix08jJwgalc4"
		},
		{
			"name": "Surat Al-Fatihah",
			"artist": "Abdullah Awad al-Juhani",
			"album": "Chapter 1",
			"url": "https://ia801507.us.archive.org/20/items/001_20190803/001.mp3?cnt=0",
			"cover_art_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TAQ6jtsdDVV7k1MsUCTdBLSdCpftxnTcknSWix08jJwgalc4"
		},
		{
			"name": "Surat Al-Fatihah",
			"artist": "Abdullah Awad al-Juhani",
			"album": "Chapter 1",
			"url": "https://ia801507.us.archive.org/20/items/001_20190803/001.mp3?cnt=0",
			"cover_art_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TAQ6jtsdDVV7k1MsUCTdBLSdCpftxnTcknSWix08jJwgalc4"
		},
        {
			"name": "Surat Al-Fatihah",
			"artist": "Abdullah Awad al-Juhani",
			"album": "Chapter 1",
			"url": "https://ia801507.us.archive.org/20/items/001_20190803/001.mp3?cnt=0",
			"cover_art_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TAQ6jtsdDVV7k1MsUCTdBLSdCpftxnTcknSWix08jJwgalc4"
		},
		{
			"name": "Surat Al-Fatihah",
			"artist": "Abdullah Awad al-Juhani",
			"album": "Chapter 1",
			"url": "https://ia801507.us.archive.org/20/items/001_20190803/001.mp3?cnt=0",
			"cover_art_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TAQ6jtsdDVV7k1MsUCTdBLSdCpftxnTcknSWix08jJwgalc4"
		},
		{
			"name": "Surat Al-Fatihah",
			"artist": "Abdullah Awad al-Juhani",
			"album": "Chapter 1",
			"url": "https://ia801507.us.archive.org/20/items/001_20190803/001.mp3?cnt=0",
			"cover_art_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TAQ6jtsdDVV7k1MsUCTdBLSdCpftxnTcknSWix08jJwgalc4"
		},
		{
			"name": "Surat Al-Fatihah",
			"artist": "Abdullah Awad al-Juhani",
			"album": "Chapter 1",
			"url": "https://ia801507.us.archive.org/20/items/001_20190803/001.mp3?cnt=0",
			"cover_art_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TAQ6jtsdDVV7k1MsUCTdBLSdCpftxnTcknSWix08jJwgalc4"
		},
        {
			"name": "Surat Al-Fatihah",
			"artist": "Abdullah Awad al-Juhani",
			"album": "Chapter 1",
			"url": "https://ia801507.us.archive.org/20/items/001_20190803/001.mp3?cnt=0",
			"cover_art_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TAQ6jtsdDVV7k1MsUCTdBLSdCpftxnTcknSWix08jJwgalc4"
		},
		{
			"name": "Surat Al-Fatihah",
			"artist": "Abdullah Awad al-Juhani",
			"album": "Chapter 1",
			"url": "https://ia801507.us.archive.org/20/items/001_20190803/001.mp3?cnt=0",
			"cover_art_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TAQ6jtsdDVV7k1MsUCTdBLSdCpftxnTcknSWix08jJwgalc4"
		},
		{
			"name": "Surat Al-Fatihah",
			"artist": "Abdullah Awad al-Juhani",
			"album": "Chapter 1",
			"url": "https://ia801507.us.archive.org/20/items/001_20190803/001.mp3?cnt=0",
			"cover_art_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TAQ6jtsdDVV7k1MsUCTdBLSdCpftxnTcknSWix08jJwgalc4"
		},
		{
			"name": "Surat Al-Fatihah",
			"artist": "Abdullah Awad al-Juhani",
			"album": "Chapter 1",
			"url": "https://ia801507.us.archive.org/20/items/001_20190803/001.mp3?cnt=0",
			"cover_art_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TAQ6jtsdDVV7k1MsUCTdBLSdCpftxnTcknSWix08jJwgalc4"
		},
        {
			"name": "Surat Al-Fatihah",
			"artist": "Abdullah Awad al-Juhani",
			"album": "Chapter 1",
			"url": "https://ia801507.us.archive.org/20/items/001_20190803/001.mp3?cnt=0",
			"cover_art_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TAQ6jtsdDVV7k1MsUCTdBLSdCpftxnTcknSWix08jJwgalc4"
		},
		{
			"name": "Surat Al-Fatihah",
			"artist": "Abdullah Awad al-Juhani",
			"album": "Chapter 1",
			"url": "https://ia801507.us.archive.org/20/items/001_20190803/001.mp3?cnt=0",
			"cover_art_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TAQ6jtsdDVV7k1MsUCTdBLSdCpftxnTcknSWix08jJwgalc4"
		},
		{
			"name": "Surat Al-Fatihah",
			"artist": "Abdullah Awad al-Juhani",
			"album": "Chapter 1",
			"url": "https://ia801507.us.archive.org/20/items/001_20190803/001.mp3?cnt=0",
			"cover_art_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TAQ6jtsdDVV7k1MsUCTdBLSdCpftxnTcknSWix08jJwgalc4"
		},
		{
			"name": "Surat Al-Fatihah",
			"artist": "Abdullah Awad al-Juhani",
			"album": "Chapter 1",
			"url": "https://ia801507.us.archive.org/20/items/001_20190803/001.mp3?cnt=0",
			"cover_art_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TAQ6jtsdDVV7k1MsUCTdBLSdCpftxnTcknSWix08jJwgalc4"
		},
        {
			"name": "Surat Al-Fatihah",
			"artist": "Abdullah Awad al-Juhani",
			"album": "Chapter 1",
			"url": "https://ia801507.us.archive.org/20/items/001_20190803/001.mp3?cnt=0",
			"cover_art_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TAQ6jtsdDVV7k1MsUCTdBLSdCpftxnTcknSWix08jJwgalc4"
		},
		{
			"name": "Surat Al-Fatihah",
			"artist": "Abdullah Awad al-Juhani",
			"album": "Chapter 1",
			"url": "https://ia801507.us.archive.org/20/items/001_20190803/001.mp3?cnt=0",
			"cover_art_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TAQ6jtsdDVV7k1MsUCTdBLSdCpftxnTcknSWix08jJwgalc4"
		},
		{
			"name": "Surat Al-Fatihah",
			"artist": "Abdullah Awad al-Juhani",
			"album": "Chapter 1",
			"url": "https://ia801507.us.archive.org/20/items/001_20190803/001.mp3?cnt=0",
			"cover_art_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TAQ6jtsdDVV7k1MsUCTdBLSdCpftxnTcknSWix08jJwgalc4"
		},
		{
			"name": "Surat Al-Fatihah",
			"artist": "Abdullah Awad al-Juhani",
			"album": "Chapter 1",
			"url": "https://ia801507.us.archive.org/20/items/001_20190803/001.mp3?cnt=0",
			"cover_art_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TAQ6jtsdDVV7k1MsUCTdBLSdCpftxnTcknSWix08jJwgalc4"
		},
        {
			"name": "Surat Al-Fatihah",
			"artist": "Abdullah Awad al-Juhani",
			"album": "Chapter 1",
			"url": "https://ia801507.us.archive.org/20/items/001_20190803/001.mp3?cnt=0",
			"cover_art_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TAQ6jtsdDVV7k1MsUCTdBLSdCpftxnTcknSWix08jJwgalc4"
		},
		{
			"name": "Surat Al-Fatihah",
			"artist": "Abdullah Awad al-Juhani",
			"album": "Chapter 1",
			"url": "https://ia801507.us.archive.org/20/items/001_20190803/001.mp3?cnt=0",
			"cover_art_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TAQ6jtsdDVV7k1MsUCTdBLSdCpftxnTcknSWix08jJwgalc4"
		},
		{
			"name": "Surat Al-Fatihah",
			"artist": "Abdullah Awad al-Juhani",
			"album": "Chapter 1",
			"url": "https://ia801507.us.archive.org/20/items/001_20190803/001.mp3?cnt=0",
			"cover_art_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TAQ6jtsdDVV7k1MsUCTdBLSdCpftxnTcknSWix08jJwgalc4"
		},
		{
			"name": "Surat Al-Fatihah",
			"artist": "Abdullah Awad al-Juhani",
			"album": "Chapter 1",
			"url": "https://ia801507.us.archive.org/20/items/001_20190803/001.mp3?cnt=0",
			"cover_art_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TAQ6jtsdDVV7k1MsUCTdBLSdCpftxnTcknSWix08jJwgalc4"
		},
        {
			"name": "Surat Al-Fatihah",
			"artist": "Abdullah Awad al-Juhani",
			"album": "Chapter 1",
			"url": "https://ia801507.us.archive.org/20/items/001_20190803/001.mp3?cnt=0",
			"cover_art_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TAQ6jtsdDVV7k1MsUCTdBLSdCpftxnTcknSWix08jJwgalc4"
		},
		{
			"name": "Surat Al-Fatihah",
			"artist": "Abdullah Awad al-Juhani",
			"album": "Chapter 1",
			"url": "https://ia801507.us.archive.org/20/items/001_20190803/001.mp3?cnt=0",
			"cover_art_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TAQ6jtsdDVV7k1MsUCTdBLSdCpftxnTcknSWix08jJwgalc4"
		},
		{
			"name": "Surat Al-Fatihah",
			"artist": "Abdullah Awad al-Juhani",
			"album": "Chapter 1",
			"url": "https://ia801507.us.archive.org/20/items/001_20190803/001.mp3?cnt=0",
		
            "cover_art_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TAQ6jtsdDVV7k1MsUCTdBLSdCpftxnTcknSWix08jJwgalc4"
		},
		{
			"name": "Surat Al-Fatihah",
			"artist": "Abdullah Awad al-Juhani",
			"album": "Chapter 1",
			"url": "https://ia801507.us.archive.org/20/items/001_20190803/001.mp3?cnt=0",
			"cover_art_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TAQ6jtsdDVV7k1MsUCTdBLSdCpftxnTcknSWix08jJwgalc4"
		},
        {
			"name": "Surat Al-Fatihah",
			"artist": "Abdullah Awad al-Juhani",
			"album": "Chapter 1",
			"url": "https://ia801507.us.archive.org/20/items/001_20190803/001.mp3?cnt=0",
			"cover_art_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TAQ6jtsdDVV7k1MsUCTdBLSdCpftxnTcknSWix08jJwgalc4"
		},
		{
			"name": "Surat Al-Fatihah",
			"artist": "Abdullah Awad al-Juhani",
			"album": "Chapter 1",
			"url": "https://ia801507.us.archive.org/20/items/001_20190803/001.mp3?cnt=0",
			"cover_art_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TAQ6jtsdDVV7k1MsUCTdBLSdCpftxnTcknSWix08jJwgalc4"
		},
		{
			"name": "Surat Al-Fatihah",
			"artist": "Abdullah Awad al-Juhani",
			"album": "Chapter 1",
			"url": "https://ia801507.us.archive.org/20/items/001_20190803/001.mp3?cnt=0",
			"cover_art_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TAQ6jtsdDVV7k1MsUCTdBLSdCpftxnTcknSWix08jJwgalc4"
		},
		{
			"name": "Surat Al-Fatihah",
			"artist": "Abdullah Awad al-Juhani",
			"album": "Chapter 1",
			"url": "https://ia801507.us.archive.org/20/items/001_20190803/001.mp3?cnt=0",
			"cover_art_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TAQ6jtsdDVV7k1MsUCTdBLSdCpftxnTcknSWix08jJwgalc4"
		},
        {
			"name": "Surat Al-Fatihah",
			"artist": "Abdullah Awad al-Juhani",
			"album": "Chapter 1",
			"url": "https://ia801507.us.archive.org/20/items/001_20190803/001.mp3?cnt=0",
			"cover_art_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TAQ6jtsdDVV7k1MsUCTdBLSdCpftxnTcknSWix08jJwgalc4"
		},
		{
			"name": "Surat Al-Fatihah",
			"artist": "Abdullah Awad al-Juhani",
			"album": "Chapter 1",
			"url": "https://ia801507.us.archive.org/20/items/001_20190803/001.mp3?cnt=0",
			"cover_art_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TAQ6jtsdDVV7k1MsUCTdBLSdCpftxnTcknSWix08jJwgalc4"
		},
		{
			"name": "Surat Al-Fatihah",
			"artist": "Abdullah Awad al-Juhani",
			"album": "Chapter 1",
			"url": "https://ia801507.us.archive.org/20/items/001_20190803/001.mp3?cnt=0",
			"cover_art_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TAQ6jtsdDVV7k1MsUCTdBLSdCpftxnTcknSWix08jJwgalc4"
		},
		{
			"name": "Surat Al-Fatihah",
			"artist": "Abdullah Awad al-Juhani",
			"album": "Chapter 1",
			"url": "https://ia801507.us.archive.org/20/items/001_20190803/001.mp3?cnt=0",
			"cover_art_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TAQ6jtsdDVV7k1MsUCTdBLSdCpftxnTcknSWix08jJwgalc4"
		},
        {
			"name": "Surat Al-Fatihah",
			"artist": "Abdullah Awad al-Juhani",
			"album": "Chapter 1",
			"url": "https://ia801507.us.archive.org/20/items/001_20190803/001.mp3?cnt=0",
			"cover_art_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TAQ6jtsdDVV7k1MsUCTdBLSdCpftxnTcknSWix08jJwgalc4"
		},
		{
			"name": "Surat Al-Fatihah",
			"artist": "Abdullah Awad al-Juhani",
			"album": "Chapter 1",
			"url": "https://ia801507.us.archive.org/20/items/001_20190803/001.mp3?cnt=0",
			"cover_art_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TAQ6jtsdDVV7k1MsUCTdBLSdCpftxnTcknSWix08jJwgalc4"
		},
		{
			"name": "Surat Al-Fatihah",
			"artist": "Abdullah Awad al-Juhani",
			"album": "Chapter 1",
			"url": "https://ia801507.us.archive.org/20/items/001_20190803/001.mp3?cnt=0",
			"cover_art_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TAQ6jtsdDVV7k1MsUCTdBLSdCpftxnTcknSWix08jJwgalc4"
		},
		{
			"name": "Surat Al-Fatihah",
			"artist": "Abdullah Awad al-Juhani",
			"album": "Chapter 1",
			"url": "https://ia801507.us.archive.org/20/items/001_20190803/001.mp3?cnt=0",
			"cover_art_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TAQ6jtsdDVV7k1MsUCTdBLSdCpftxnTcknSWix08jJwgalc4"
		},
        {
			"name": "Surat Al-Fatihah",
			"artist": "Abdullah Awad al-Juhani",
			"album": "Chapter 1",
			"url": "https://ia801507.us.archive.org/20/items/001_20190803/001.mp3?cnt=0",
			"cover_art_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TAQ6jtsdDVV7k1MsUCTdBLSdCpftxnTcknSWix08jJwgalc4"
		},
        
		{
			"name": "Surat Al-Fatihah",
			"artist": "Abdullah Awad al-Juhani",
			"album": "Chapter 1",
			"url": "https://ia801507.us.archive.org/20/items/001_20190803/001.mp3?cnt=0",
			"cover_art_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TAQ6jtsdDVV7k1MsUCTdBLSdCpftxnTcknSWix08jJwgalc4"
		},
		{
			"name": "Surat Al-Fatihah",
			"artist": "Abdullah Awad al-Juhani",
			"album": "Chapter 1",
			"url": "https://ia801507.us.archive.org/20/items/001_20190803/001.mp3?cnt=0",
			"cover_art_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TAQ6jtsdDVV7k1MsUCTdBLSdCpftxnTcknSWix08jJwgalc4"
		},
		{
			"name": "Surat Al-Fatihah",
			"artist": "Abdullah Awad al-Juhani",
			"album": "Chapter 1",
			"url": "https://ia801507.us.archive.org/20/items/001_20190803/001.mp3?cnt=0",
			"cover_art_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TAQ6jtsdDVV7k1MsUCTdBLSdCpftxnTcknSWix08jJwgalc4"
		},
        {
			"name": "Surat Al-Fatihah",
			"artist": "Abdullah Awad al-Juhani",
			"album": "Chapter 1",
			"url": "https://ia801507.us.archive.org/20/items/001_20190803/001.mp3?cnt=0",
			"cover_art_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TAQ6jtsdDVV7k1MsUCTdBLSdCpftxnTcknSWix08jJwgalc4"
		},
		{
			"name": "Surat Al-Fatihah",
			"artist": "Abdullah Awad al-Juhani",
			"album": "Chapter 1",
			"url": "https://ia801507.us.archive.org/20/items/001_20190803/001.mp3?cnt=0",
			"cover_art_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TAQ6jtsdDVV7k1MsUCTdBLSdCpftxnTcknSWix08jJwgalc4"
		},
		{
			"name": "Surat Al-Fatihah",
			"artist": "Abdullah Awad al-Juhani",
			"album": "Chapter 1",
			"url": "https://ia801507.us.archive.org/20/items/001_20190803/001.mp3?cnt=0",
			"cover_art_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TAQ6jtsdDVV7k1MsUCTdBLSdCpftxnTcknSWix08jJwgalc4"
		},
		{
			"name": "Surat Al-Fatihah",
			"artist": "Abdullah Awad al-Juhani",
			"album": "Chapter 1",
			"url": "https://ia801507.us.archive.org/20/items/001_20190803/001.mp3?cnt=0",
			"cover_art_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TAQ6jtsdDVV7k1MsUCTdBLSdCpftxnTcknSWix08jJwgalc4"
		},
        {
			"name": "Surat Al-Fatihah",
			"artist": "Abdullah Awad al-Juhani",
			"album": "Chapter 1",
			"url": "https://ia801507.us.archive.org/20/items/001_20190803/001.mp3?cnt=0",
			"cover_art_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TAQ6jtsdDVV7k1MsUCTdBLSdCpftxnTcknSWix08jJwgalc4"
		},
		{
			"name": "Surat Al-Fatihah",
			"artist": "Abdullah Awad al-Juhani",
			"album": "Chapter 1",
			"url": "https://ia801507.us.archive.org/20/items/001_20190803/001.mp3?cnt=0",
			"cover_art_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TAQ6jtsdDVV7k1MsUCTdBLSdCpftxnTcknSWix08jJwgalc4"
		},
		{
			"name": "Surat Al-Fatihah",
			"artist": "Abdullah Awad al-Juhani",
			"album": "Chapter 1",
			"url": "https://ia801507.us.archive.org/20/items/001_20190803/001.mp3?cnt=0",
			"cover_art_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TAQ6jtsdDVV7k1MsUCTdBLSdCpftxnTcknSWix08jJwgalc4"
		},
		{
			"name": "Surat Al-Fatihah",
			"artist": "Abdullah Awad al-Juhani",
			"album": "Chapter 1",
			"url": "https://ia801507.us.archive.org/20/items/001_20190803/001.mp3?cnt=0",
			"cover_art_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TAQ6jtsdDVV7k1MsUCTdBLSdCpftxnTcknSWix08jJwgalc4"
		},
        {
			"name": "Surat Al-Fatihah",
			"artist": "Abdullah Awad al-Juhani",
			"album": "Chapter 1",
			"url": "https://ia801507.us.archive.org/20/items/001_20190803/001.mp3?cnt=0",
			"cover_art_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TAQ6jtsdDVV7k1MsUCTdBLSdCpftxnTcknSWix08jJwgalc4"
		},
		{
			"name": "Surat Al-Fatihah",
			"artist": "Abdullah Awad al-Juhani",
			"album": "Chapter 1",
			"url": "https://ia801507.us.archive.org/20/items/001_20190803/001.mp3?cnt=0",
			"cover_art_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TAQ6jtsdDVV7k1MsUCTdBLSdCpftxnTcknSWix08jJwgalc4"
		},
		{
			"name": "Surat Al-Fatihah",
			"artist": "Abdullah Awad al-Juhani",
			"album": "Chapter 1",
			"url": "https://ia801507.us.archive.org/20/items/001_20190803/001.mp3?cnt=0",
			"cover_art_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TAQ6jtsdDVV7k1MsUCTdBLSdCpftxnTcknSWix08jJwgalc4"
		},
		{
			"name": "Surat Al-Fatihah",
			"artist": "Abdullah Awad al-Juhani",
			"album": "Chapter 1",
			"url": "https://ia801507.us.archive.org/20/items/001_20190803/001.mp3?cnt=0",
			"cover_art_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TAQ6jtsdDVV7k1MsUCTdBLSdCpftxnTcknSWix08jJwgalc4"
		},
		
	],
  "callbacks": {
        'play': function(){
            document.getElementById('album-art').style.visibility = 'hidden';
            document.getElementById('large-visualization').style.visibility = 'visible';
        },

        'pause': function(){
            document.getElementById('album-art').style.visibility = 'visible';
            document.getElementById('large-visualization').style.visibility = 'hidden';
        }
    },
  waveforms: {
    sample_rate: 50
  }
});
document.getElementById('large-visualization').style.height = document.getElementById('album-art').offsetWidth + 'px';
            
