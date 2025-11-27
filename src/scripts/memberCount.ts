/**
 * Fetches and displays the Python Discord member count
 */
export function initMemberCount() {
	async function fetchMemberCount() {
		try {
			const response = await fetch(
				"https://discord.com/api/v10/invites/python?with_counts=true",
			);
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			const data = await response.json();
			const memberCount = Math.floor(data.approximate_member_count / 1000) * 1000;
			const obj = document.getElementById("pydis-member-count");

			if (obj) {
				obj.textContent = memberCount.toLocaleString();
			}
		} catch (error) {
			console.error("Failed to fetch member count:", error);
		}
	}

	fetchMemberCount();
}

// Auto-initialize when script is loaded
initMemberCount();
