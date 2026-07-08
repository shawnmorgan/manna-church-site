#!/bin/bash

# Script to download placeholder images using Lorem Picsum
# Lorem Picsum provides reliable random images

# Create output directory
OUTPUT_DIR="../public/assets/images/locations"
mkdir -p "$OUTPUT_DIR"

# Remove old HTML files
rm -f "$OUTPUT_DIR"/*.jpg

echo "📸 Downloading placeholder images using Lorem Picsum..."
echo ""

# Function to download image with unique seed
download_image() {
    local filename="$1"
    local seed="$2"
    local width="1200"
    local height="800"

    echo "Downloading: $filename"

    # Use Lorem Picsum with seed for consistent images
    curl -L -s -o "$OUTPUT_DIR/$filename" \
        "https://picsum.photos/seed/${seed}/${width}/${height}"

    if [ -f "$OUTPUT_DIR/$filename" ] && [ -s "$OUTPUT_DIR/$filename" ]; then
        # Check if it's actually an image
        file_type=$(file "$OUTPUT_DIR/$filename" | grep -o "JPEG\|PNG")
        if [ -n "$file_type" ]; then
            echo "  ✅ Saved successfully ($(du -h "$OUTPUT_DIR/$filename" | cut -f1))"
        else
            echo "  ❌ Failed - not a valid image"
        fi
    else
        echo "  ❌ Failed to download"
    fi

    # Rate limiting
    sleep 1
}

echo "🏛️  SITES (Church Buildings)..."
echo ""

download_image "kapolei-hi.jpg" "kapolei"
download_image "colorado-springs-co.jpg" "colorado"
download_image "fayetteville-ft-bragg.jpg" "fayetteville"
download_image "fuquay-varina-nc.jpg" "fuquay"
download_image "high-point-nc.jpg" "highpoint"
download_image "sanford-nc.jpg" "sanford"
download_image "newport-news-va.jpg" "newport"
download_image "stafford-va.jpg" "stafford"
download_image "niceville-fl.jpg" "niceville"
download_image "killeen-tx.jpg" "killeen"
download_image "picatinny-arsenal-nj.jpg" "picatinny"
download_image "clarksville-tn.jpg" "clarksville"

echo ""
echo "🏙️  MICRO-SITES (Cities)..."
echo ""

download_image "ft-leonard-wood-mo.jpg" "leonard"
download_image "ft-polk-la.jpg" "polk"
download_image "ft-knox-ky.jpg" "knox"
download_image "weiden-germany.jpg" "weiden"
download_image "quantico-va.jpg" "quantico"
download_image "chesapeake-va.jpg" "chesapeake"
download_image "ft-meade.jpg" "meade"
download_image "ft-sill.jpg" "sill"
download_image "monterey-ca.jpg" "monterey"
download_image "omaha-ne.jpg" "omaha"

echo ""
echo "✅ Complete! All images downloaded to: $OUTPUT_DIR"
