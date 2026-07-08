#!/bin/bash

# Script to download location images using Unsplash Source (no API key needed)
# These are placeholder images that match the location themes

# Create output directory
OUTPUT_DIR="../public/assets/images/locations"
mkdir -p "$OUTPUT_DIR"

echo "📸 Downloading location images..."
echo ""

# Function to download image
download_image() {
    local query="$1"
    local filename="$2"
    local width="1200"
    local height="800"

    echo "Downloading: $filename ($query)"

    # Use Unsplash Source - provides random images by keyword without API
    curl -L -s -o "$OUTPUT_DIR/$filename" \
        "https://source.unsplash.com/${width}x${height}/?${query}"

    if [ -f "$OUTPUT_DIR/$filename" ] && [ -s "$OUTPUT_DIR/$filename" ]; then
        echo "  ✅ Saved successfully"
    else
        echo "  ❌ Failed to download"
    fi

    # Rate limiting
    sleep 2
}

echo "🏛️  SITES (Church Buildings)..."
echo ""

download_image "church,building" "kapolei-hi.jpg"
download_image "church,modern" "colorado-springs-co.jpg"
download_image "church,exterior" "fayetteville-ft-bragg.jpg"
download_image "church,community" "fuquay-varina-nc.jpg"
download_image "church,architecture" "high-point-nc.jpg"
download_image "church,building" "sanford-nc.jpg"
download_image "church,modern" "newport-news-va.jpg"
download_image "church,exterior" "stafford-va.jpg"
download_image "church,architecture" "niceville-fl.jpg"
download_image "church,building" "killeen-tx.jpg"
download_image "church,community" "picatinny-arsenal-nj.jpg"
download_image "church,modern" "clarksville-tn.jpg"

echo ""
echo "🏙️  MICRO-SITES (Cities)..."
echo ""

download_image "missouri,city" "ft-leonard-wood-mo.jpg"
download_image "louisiana,city" "ft-polk-la.jpg"
download_image "kentucky,city" "ft-knox-ky.jpg"
download_image "germany,city,weiden" "weiden-germany.jpg"
download_image "virginia,city,quantico" "quantico-va.jpg"
download_image "virginia,city,chesapeake" "chesapeake-va.jpg"
download_image "maryland,city" "ft-meade.jpg"
download_image "oklahoma,city" "ft-sill.jpg"
download_image "monterey,california,coast" "monterey-ca.jpg"
download_image "omaha,nebraska,skyline" "omaha-ne.jpg"

echo ""
echo "✅ Complete! All images downloaded to: $OUTPUT_DIR"
echo ""
echo "📝 Note: These are placeholder images from Unsplash."
echo "   Replace with actual church/city photos as needed."
