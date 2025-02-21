import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },

  // Search Section
  searchGroup: {
    padding: 15,
    backgroundColor: "#34967C",
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 30,
    padding: 10,
    paddingHorizontal: 15,
  },
  searchControlGroup: {
    flex: 1,
  },
  searchFormText: {
    fontSize: 16,
    color: "#334",
  },
  searchControl: {
    fontSize: 14,
    color: "#666",
  },
  searchButton: {
    backgroundColor: "#34967C",
    borderRadius: 30,
    padding: 10,
  },

  // Filters
  filterGroup: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "white",
  },
  filterContainer: {
    alignItems: "center",
    marginRight: 15,
  },

  // Listings
  listingContainer: {
    paddingHorizontal: 15,
  },
  propertyCard: {
    backgroundColor: "white",
    borderRadius: 15,
    marginBottom: 15,
    overflow: "hidden",
  },
  propertyImage: {
    width: "100%",
    height: 200,
  },
  propertyDetails: {
    padding: 10,
  },
  propertyTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  propertyLocation: {
    fontSize: 14,
    color: "#666",
  },
  propertyPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#34967C",
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: "white",
    padding: 5,
    borderRadius: 8,
  },

  // Show More Button
  paginationContainer: {
    alignItems: "center",
    paddingVertical: 20,
  },
  showMoreButton: {
    backgroundColor: "#333",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  showMoreButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

  // Bottom Navigation
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "white",
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  bottomNavItem: {
    alignItems: "center",
  },
  filterImage: {
    width: 30,
    height: 30,
    marginBottom: 2, // Space between image and text
    flex:1
  },
});

