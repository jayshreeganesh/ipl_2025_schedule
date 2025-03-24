document.addEventListener("DOMContentLoaded", function () {
    const matches = [
        { matchNo: "1", date: "22-Mar-25", day: "Sat", time: "7:30 PM", home: "KKR", away: "RCB", venue: "Kolkata" },
        { matchNo: "2", date: "23-Mar-25", day: "Sun", time: "3:30 PM", home: "SRH", away: "RR", venue: "Hyderabad" },
        { matchNo: "3", date: "23-Mar-25", day: "Sun", time: "7:30 PM", home: "CSK", away: "MI", venue: "Chennai" },
        { matchNo: "4", date: "24-Mar-25", day: "Mon", time: "7:30 PM", home: "DC", away: "LSG", venue: "Visakhapatnam" },
        { matchNo: "5", date: "25-Mar-25", day: "Tue", time: "7:30 PM", home: "GT", away: "PBKS", venue: "Ahmedabad" },
        { matchNo: "6", date: "26-Mar-25", day: "Wed", time: "7:30 PM", home: "RR", away: "KKR", venue: "Guwahati" },
        { matchNo: "7", date: "27-Mar-25", day: "Thu", time: "7:30 PM", home: "SRH", away: "LSG", venue: "Hyderabad" },
        { matchNo: "8", date: "28-Mar-25", day: "Fri", time: "7:30 PM", home: "CSK", away: "RCB", venue: "Chennai" },
        { matchNo: "9", date: "29-Mar-25", day: "Sat", time: "7:30 PM", home: "GT", away: "MI", venue: "Ahmedabad" },
        { matchNo: "10", date: "30-Mar-25", day: "Sun", time: "3:30 PM", home: "DC", away: "SRH", venue: "Visakhapatnam" },
        { matchNo: "11", date: "30-Mar-25", day: "Sun", time: "7:30 PM", home: "RR", away: "CSK", venue: "Guwahati" },
        { matchNo: "12", date: "31-Mar-25", day: "Mon", time: "7:30 PM", home: "MI", away: "KKR", venue: "Mumbai" },
        { matchNo: "13", date: "01-Apr-25", day: "Tue", time: "7:30 PM", home: "LSG", away: "PBKS", venue: "Lucknow" },
        { matchNo: "14", date: "02-Apr-25", day: "Wed", time: "7:30 PM", home: "RCB", away: "GT", venue: "Bengaluru" },
        { matchNo: "15", date: "03-Apr-25", day: "Thu", time: "7:30 PM", home: "KKR", away: "SRH", venue: "Kolkata" },
        { matchNo: "16", date: "04-Apr-25", day: "Fri", time: "7:30 PM", home: "LSG", away: "MI", venue: "Lucknow" },
        { matchNo: "17", date: "05-Apr-25", day: "Sat", time: "3:30 PM", home: "CSK", away: "DC", venue: "Chennai" },
        { matchNo: "18", date: "05-Apr-25", day: "Sat", time: "7:30 PM", home: "PBKS", away: "RR", venue: "New Chandigarh" },
        { matchNo: "19", date: "06-Apr-25", day: "Sun", time: "3:30 PM", home: "KKR", away: "LSG", venue: "Kolkata" },
        { matchNo: "20", date: "06-Apr-25", day: "Sun", time: "7:30 PM", home: "SRH", away: "GT", venue: "Hyderabad" },
        { matchNo: "21", date: "07-Apr-25", day: "Mon", time: "7:30 PM", home: "MI", away: "RCB", venue: "Mumbai" },
        { matchNo: "22", date: "08-Apr-25", day: "Tue", time: "7:30 PM", home: "PBKS", away: "CSK", venue: "New Chandigarh" },
        { matchNo: "23", date: "09-Apr-25", day: "Wed", time: "7:30 PM", home: "GT", away: "RR", venue: "Ahmedabad" },
        { matchNo: "24", date: "10-Apr-25", day: "Thu", time: "7:30 PM", home: "RCB", away: "DC", venue: "Bengaluru" },
        { matchNo: "25", date: "11-Apr-25", day: "Fri", time: "7:30 PM", home: "CSK", away: "KKR", venue: "Chennai" },
        { matchNo: "26", date: "12-Apr-25", day: "Sat", time: "3:30 PM", home: "LSG", away: "GT", venue: "Lucknow" },
        { matchNo: "27", date: "12-Apr-25", day: "Sat", time: "7:30 PM", home: "SRH", away: "PBKS", venue: "Hyderabad" },
        { matchNo: "28", date: "13-Apr-25", day: "Sun", time: "3:30 PM", home: "RR", away: "RCB", venue: "Jaipur" },
        { matchNo: "29", date: "13-Apr-25", day: "Sun", time: "7:30 PM", home: "DC", away: "MI", venue: "Delhi" },
        { matchNo: "30", date: "14-Apr-25", day: "Mon", time: "7:30 PM", home: "LSG", away: "CSK", venue: "Lucknow" },
        { matchNo: "31", date: "15-Apr-25", day: "Tue", time: "7:30 PM", home: "PBKS", away: "KKR", venue: "New Chandigarh" },
        { matchNo: "32", date: "16-Apr-25", day: "Wed", time: "7:30 PM", home: "DC", away: "RR", venue: "Delhi" },
        { matchNo: "33", date: "17-Apr-25", day: "Thu", time: "7:30 PM", home: "MI", away: "SRH", venue: "Mumbai" },
        { matchNo: "34", date: "18-Apr-25", day: "Fri", time: "7:30 PM", home: "RCB", away: "PBKS", venue: "Bengaluru" },
        { matchNo: "35", date: "19-Apr-25", day: "Sat", time: "3:30 PM", home: "GT", away: "DC", venue: "Ahmedabad" },
        { matchNo: "36", date: "19-Apr-25", day: "Sat", time: "7:30 PM", home: "RR", away: "LSG", venue: "Jaipur" },
        { matchNo: "37", date: "20-Apr-25", day: "Sun", time: "3:30 PM", home: "PBKS", away: "RCB", venue: "New Chandigarh" },
        { matchNo: "38", date: "20-Apr-25", day: "Sun", time: "7:30 PM", home: "MI", away: "CSK", venue: "Mumbai" },
        { matchNo: "39", date: "21-Apr-25", day: "Mon", time: "7:30 PM", home: "KKR", away: "GT", venue: "Kolkata" },
        { matchNo: "40", date: "22-Apr-25", day: "Tue", time: "7:30 PM", home: "LSG", away: "DC", venue: "Lucknow" },
        { matchNo: "41", date: "23-Apr-25", day: "Wed", time: "7:30 PM", home: "SRH", away: "MI", venue: "Hyderabad" },
        { matchNo: "42", date: "24-Apr-25", day: "Thu", time: "7:30 PM", home: "RCB", away: "RR", venue: "Bengaluru" },
        { matchNo: "43", date: "25-Apr-25", day: "Fri", time: "7:30 PM", home: "CSK", away: "SRH", venue: "Chennai" },
        { matchNo: "44", date: "26-Apr-25", day: "Sat", time: "7:30 PM", home: "KKR", away: "PBKS", venue: "Kolkata" },
        { matchNo: "45", date: "27-Apr-25", day: "Sun", time: "3:30 PM", home: "MI", away: "LSG", venue: "Mumbai" },
        { matchNo: "46", date: "27-Apr-25", day: "Sun", time: "7:30 PM", home: "DC", away: "RCB", venue: "Delhi" },
        { matchNo: "47", date: "28-Apr-25", day: "Mon", time: "7:30 PM", home: "RR", away: "GT", venue: "Jaipur" },
        { matchNo: "48", date: "29-Apr-25", day: "Tue", time: "7:30 PM", home: "DC", away: "KKR", venue: "Delhi" },
        { matchNo: "49", date: "30-Apr-25", day: "Wed", time: "7:30 PM", home: "CSK", away: "PBKS", venue: "Chennai" },
        { matchNo: "50", date: "01-May-25", day: "Thu", time: "7:30 PM", home: "RR", away: "MI", venue: "Jaipur" },
        { matchNo: "51", date: "02-May-25", day: "Fri", time: "7:30 PM", home: "GT", away: "SRH", venue: "Ahmedabad" },
        { matchNo: "52", date: "03-May-25", day: "Sat", time: "7:30 PM", home: "RCB", away: "CSK", venue: "Bengaluru" },
        { matchNo: "53", date: "04-May-25", day: "Sun", time: "3:30 PM", home: "KKR", away: "RR", venue: "Kolkata" },
        { matchNo: "54", date: "04-May-25", day: "Sun", time: "7:30 PM", home: "PBKS", away: "LSG", venue: "Dharamshala" },
        { matchNo: "55", date: "05-May-25", day: "Mon", time: "7:30 PM", home: "SRH", away: "DC", venue: "Hyderabad" },
        { matchNo: "56", date: "06-May-25", day: "Tue", time: "7:30 PM", home: "MI", away: "GT", venue: "Mumbai" },
        { matchNo: "57", date: "07-May-25", day: "Wed", time: "7:30 PM", home: "KKR", away: "CSK", venue: "Kolkata" },
        { matchNo: "58", date: "08-May-25", day: "Thu", time: "7:30 PM", home: "PBKS", away: "DC", venue: "Dharamshala" },
        { matchNo: "59", date: "09-May-25", day: "Fri", time: "7:30 PM", home: "LSG", away: "RCB", venue: "Lucknow" },
        { matchNo: "60", date: "10-May-25", day: "Sat", time: "7:30 PM", home: "SRH", away: "KKR", venue: "Hyderabad" },
        { matchNo: "61", date: "11-May-25", day: "Sun", time: "3:30 PM", home: "PBKS", away: "MI", venue: "Dharamshala" },
        { matchNo: "62", date: "11-May-25", day: "Sun", time: "7:30 PM", home: "DC", away: "GT", venue: "Delhi" },
        { matchNo: "63", date: "12-May-25", day: "Mon", time: "7:30 PM", home: "CSK", away: "RR", venue: "Chennai" },
        { matchNo: "64", date: "13-May-25", day: "Tue", time: "7:30 PM", home: "RCB", away: "SRH", venue: "Bengaluru" },
        { matchNo: "65", date: "14-May-25", day: "Wed", time: "7:30 PM", home: "GT", away: "LSG", venue: "Ahmedabad" },
        { matchNo: "66", date: "15-May-25", day: "Thu", time: "7:30 PM", home: "MI", away: "DC", venue: "Mumbai" },
        { matchNo: "67", date: "16-May-25", day: "Fri", time: "7:30 PM", home: "RR", away: "PBKS", venue: "Jaipur" },
        { matchNo: "68", date: "17-May-25", day: "Sat", time: "7:30 PM", home: "RCB", away: "KKR", venue: "Bengaluru" },
        { matchNo: "69", date: "18-May-25", day: "Sun", time: "3:30 PM", home: "GT", away: "CSK", venue: "Ahmedabad" },
        { matchNo: "70", date: "18-May-25", day: "Sun", time: "7:30 PM", home: "LSG", away: "SRH", venue: "Lucknow" },
        { matchNo: "71", date: "20-May-25", day: "Tue", time: "7:30 PM", home: "Qualifier 1", away: "", venue: "Hyderabad" },
        { matchNo: "72", date: "21-May-25", day: "Wed", time: "7:30 PM", home: "Eliminator", away: "", venue: "Hyderabad" },
        { matchNo: "73", date: "23-May-25", day: "Fri", time: "7:30 PM", home: "Qualifier 2", away: "", venue: "Kolkata" },
        { matchNo: "74", date: "25-May-25", day: "Sun", time: "7:30 PM", home: "Final", away: "", venue: "Kolkata" }
    ];

    const scheduleTable = document.getElementById("schedule");
    const searchInput = document.getElementById("search");
    const teamFilter = document.getElementById("team-filter");

    function renderMatches(filteredMatches) {
        scheduleTable.innerHTML = "";
        filteredMatches.forEach(match => {
            const row = `<tr>
                <td>${match.matchNo}</td>
                <td>${match.date}</td>
                <td>${match.day}</td>
                <td>${match.time}</td>
                <td>${match.home}</td>
                <td>${match.away}</td>
                <td>${match.venue}</td>
            </tr>`;
            scheduleTable.innerHTML += row;
        });
    }

    function filterMatches() {
        const query = searchInput.value.toLowerCase();
        const team = teamFilter.value;
        const filteredMatches = matches.filter(match => {
            return (
                (match.home.toLowerCase().includes(query) ||
                match.away.toLowerCase().includes(query) ||
                match.venue.toLowerCase().includes(query)) &&
                (team === "" || match.home === team || match.away === team)
            );
        });
        renderMatches(filteredMatches);
    }

    searchInput.addEventListener("input", filterMatches);
    teamFilter.addEventListener("change", filterMatches);

    renderMatches(matches);
});
