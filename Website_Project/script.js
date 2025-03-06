document.getElementById('character-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const character = document.getElementById('favorite-character').value;
    let artworkUrl;

    switch (character) {
        case 'Jeff':
            artworkUrl = 'https://scontent-man2-1.xx.fbcdn.net/v/t39.30808-6/466412238_122171492102122686_5410259832060052275_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=3-OZmQx8xjoQ7kNvgFCfiWW&_nc_zt=23&_nc_ht=scontent-man2-1.xx&_nc_gid=A_0-5p8WOkWQ52i1KRTmxbo&oh=00_AYCJ4XDRhWKCuWVqamKAc2OoGFEG3joi5EFO5fZxZYDclQ&oe=67988207';
            break;
        case 'Namor':
            artworkUrl = 'https://scontent-man2-1.xx.fbcdn.net/v/t39.30808-6/467394444_122172495326122686_3620674741690657421_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=uSTicHCHEh4Q7kNvgE59I_O&_nc_zt=23&_nc_ht=scontent-man2-1.xx&_nc_gid=AWV-Led0apuR8mTUARZ5kww&oh=00_AYB8q1OHfg5bxu5nKE0o6AqUUSE5NEey3N91-s8wL9AZuA&oe=67986502';
            break;
        case 'Captain America':
            artworkUrl = 'https://scontent-man2-1.xx.fbcdn.net/v/t39.30808-6/467569433_122172369962122686_4128853788035267543_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=gj-4cfe0M9gQ7kNvgFCqJ5e&_nc_zt=23&_nc_ht=scontent-man2-1.xx&_nc_gid=ArF929rQssCHrM_lBiLrLd9&oh=00_AYCleI-7qyryjBcc1qdmuqrgIT-YlUUbqrdS4R9mtZEO9A&oe=67986ECA';
            break;
        case 'Peni Parker':
            artworkUrl = 'https://scontent-man2-1.xx.fbcdn.net/v/t39.30808-6/465946740_122171088122122686_1749183867200541969_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=fmuh8UL2E1UQ7kNvgHanjYY&_nc_zt=23&_nc_ht=scontent-man2-1.xx&_nc_gid=A1hOa8Kg7MhKP3FP-aBiKw7&oh=00_AYAmvoZOpVJxTIUfb8_weK6g0L_xJ0Ju-wspnQmSU1Cwxw&oe=67988B6F';
            break;
        case 'Moon Knight':
            artworkUrl = 'https://scontent-man2-1.xx.fbcdn.net/v/t39.30808-6/466379045_122171152688122686_3013153139966604382_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=l3Y6NG9QEy4Q7kNvgHLyoxs&_nc_zt=23&_nc_ht=scontent-man2-1.xx&_nc_gid=AamN1RwH0ORe2BtHaLugf7q&oh=00_AYDfLvzm8ZvfdwwQC_1HtAN5NRbi-Gf_AxHRnyc8C0lPqQ&oe=67986322';
            break;
        default:
            artworkUrl = '';
    }

    const artworkDiv = document.getElementById('artwork');
    artworkDiv.innerHTML = artworkUrl ? `<img src="${artworkUrl}" alt="${character} artwork" class="mx-auto rounded shadow-md"/>` : 'Artwork not available';
});
