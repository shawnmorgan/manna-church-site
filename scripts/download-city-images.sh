#!/bin/bash

# Script to download city/location images using Pexels API
# Pexels API is free and provides high-quality stock photos

PEXELS_API_KEY="YOUR_PEXELS_API_KEY"

# Create output directory
mkdir -p "../public/assets/images/locations"

# Function to download image from Pexels
download_pexels_image() {
    local query="$1"
    local filename="$2"
    local output_path="../public/assets/images/locations/$filename"

    echo "Searching for: $query"

    # Search Pexels API
    response=$(curl -s -H "Authorization: $PEXELS_API_KEY" \
        "https://api.pexels.com/v1/search?query=$(echo $query | sed 's/ /%20/g')&per_page=1")

    # Extract first image URL
    image_url=$(echo $response | grep -o '"medium":"[^"]*' | head -1 | cut -d'"' -f4)

    if [ -n "$image_url" ]; then
        echo "  Downloading: $image_url"
        curl -s -o "$output_path" "$image_url"
        echo "  ✅ Saved to: $filename"
    else
        echo "  ❌ No image found"
    fi

    # Rate limiting
    sleep 1
}

echo "🏙️  Downloading city images for MICRO-SITES..."
echo ""

# Micro-Sites
download_pexels_image "Fort Leonard Wood Missouri" "ft-leonard-wood-mo.jpg"
download_pexels_image "Fort Polk Louisiana" "ft-polk-la.jpg"
download_pexels_image "Fort Knox Kentucky" "ft-knox-ky.jpg"
download_pexels_image "Weiden Germany cityscape" "weiden-germany.jpg"
download_pexels_image "Quantico Virginia" "quantico-va.jpg"
download_pexels_image "Chesapeake Virginia skyline" "chesapeake-va.jpg"
download_pexels_image "Fort Meade Maryland" "ft-meade.jpg"
download_pexels_image "Fort Sill Oklahoma" "ft-sill.jpg"
download_pexels_image "Monterey California coastal" "monterey-ca.jpg"
download_pexels_image "Omaha Nebraska skyline" "omaha-ne.jpg"

echo ""
echo "✅ Complete! Images saved to public/assets/images/locations/"
